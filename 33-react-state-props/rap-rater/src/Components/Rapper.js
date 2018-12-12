import React from "react";

class Rapper extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.rapper.name}</h2>
        <img src={this.props.rapper.sadImage} alt="" className="rapper" />
      </div>
    );
  }
}

export default Rapper;
