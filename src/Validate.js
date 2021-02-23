import React, { Component } from "react";
import "./Validate.css";

export default class Validate extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  input = React.createRef();

  focus = () => {
    this.input.current.focus();
  };

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.input.focus();
    console.log("e.target.value >", e.target.value);
    console.log("validate >", this.state.validated);
  };

  alertValidate = (e) => {
    console.log("e.target.value >", e.target.value);
    console.log("validate >", this.state.validated);
  };

 

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>VALIDATE</button>
      </div>
    );
  }
}
