import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <h1>
        Name: {this.props.name}, Other Prop: {this.props.otherprop}
      </h1>
    );
  }
}

export default App;
