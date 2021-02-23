import React from "react";
import LifeCycle from "./LifeCycle.js";
import Error from "./Error.js";

const App = () => {
  return (
    <Error>
      <LifeCycle />
    </Error>
  );
};

export default App;

// import React, { Component } from "react";
// class App extends Component {
//   render() {
//     const name = "클래스형";
//     return <div className="react">{name}</div>;
//   }
// }
