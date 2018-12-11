import React from "react";
import RapperList from "./rapperList";

class Rapper extends React.Component {
  render() {
    console.log("Rapper Props", this.props);
    return <img src={this.props.rapper.happyImage} alt="" />;
  }
}

export default Rapper;
