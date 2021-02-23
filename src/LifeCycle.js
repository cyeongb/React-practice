import React, { Component } from "react";

export default class LifeCycle extends Component {
  state = {
    number: 0,
    color: "yellow",
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("============= constructor()");
  }

  static getDrivedStateFromProps(nextProps, prevState) {
    console.log("============== getDrivedStateFromProps()");
    console.log("prevState >", prevState);
    console.log("nextProps > ", nextProps);

    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return;
  }

  componentDidMount() {
    console.log("============== componentDidMount()");
  }

  shouldComponentUpdate(prevState, nextState) {
    console.log("=========== shouldComponentUpdate()");
    console.log(
      "prevState.number : " +
        prevState.number +
        ", nextState.number :" +
        nextState.number
    );
    //nextState의 마지막 자리가 4면 리렌더링 하지 않습니다
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("============== componentWillUnmount()");
  }

  handleClick = () => {
    console.log("handleClick()");
    this.setState({ number: this.state.number + 1, color: "violet" });
    if (this.state.number % 2 === 0) {
      this.setState({ color: "yellow" });
    }
  };

  getSnapshotBeforeUpdate(prevProps, snapshot) {
    console.log("============== getSnapshotBeforeUpdate()");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return snapshot;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("========== componentDidUpdate()");

    console.log("prevState.color >", prevState.color);

    if (snapshot) {
      console.log("snapshot > ", snapshot); //color before update
    }
  }

  render() {
    console.log("============= render()");

    const style = { color: this.props.color };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <br />
        <hr />
        <p>color :{this.state.color}</p>
        <button onClick={this.handleClick}> ADD</button>
      </div>
    );
  }
}
