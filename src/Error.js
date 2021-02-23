import React, { Component } from "react";

export default class Error extends Component {
  state = { error: false };

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) {
      return <div> !! ERROR !!</div>;
    }
    return this.props.children;
  }
}
