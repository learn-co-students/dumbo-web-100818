import React, { Component } from "react";
import logo from "./logo.svg";
import Rapper from "./Rapper";
import RapperList from "./rapperList";
import Form from "./NewRapperForm";
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

  rapperSubmitHandler = rapper => {
    console.log("rapper Submit Handler", rapper);
    let arr = [...this.state.rapperList, rapper];
    this.setState({
      rapperList: arr
    });
  };

  render() {
    let list = this.state.rapperList.map(rapper => {
      return <Rapper key={rapper.name} rapper={rapper} />;
    });

    return (
      <div>
        <Form submitHandler={this.rapperSubmitHandler} />
        {list}
      </div>
    );
  }
}

export default App;
