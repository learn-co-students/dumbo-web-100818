import React, { Component } from "react";
import logo from "./logo.svg";
import Rapper from "./Rapper";
import RapperList from "./rapperList";
import "./App.css";

class App extends Component {
  state = {
    rapperList: RapperList,
    day: true
  };

  clickHandler = () => {
    console.log("clicked");
    this.setState({
      day: !this.state.day
    });
  };

  render() {
    return (
      <div>
        <Rapper rapper={this.state.rapperList[0]} />
        <h1>
          Name:
          {this.state.day ? (
            <h1 onClick={this.clickHandler}>Chicken Leg</h1>
          ) : (
            <h1 onClick={this.clickHandler}>Winter is Coding</h1>
          )}
        </h1>
      </div>
    );
  }
}

export default App;
