import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, number, children } = this.props;
    return (
      <>
        this name is {name}. <br /> children is {children}
        <br />
        my number is {number}.
      </>
    );
  }

  static defaultProps = { name: "기본이름", number: 0 };
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  };
}

export default MyComponent;
