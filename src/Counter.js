import React, { Component } from "react";

class Counter extends Component {
    //constructor메서드에서 state를 설정합니다.
  constructor(props) {
    super(props);
    // state 의 초깃값
    this.state = { number: 0 };
  }
  render() {
    const { number } = this.state;
    return (
      <>
        <h1>{number}</h1>
        <br />
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          <h3>-</h3>
        </button>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          <h3>+</h3>
        </button>
      </>
    );
  }
}

export default Counter;
