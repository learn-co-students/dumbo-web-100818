import React from "react";

class Rapper extends React.Component {
  state = {
    flip: true
  };

  handleClick = () => {
    this.setState({
      flip: !this.state.flip
    });
  };

  render() {
    return (
      <div>
        <h2>{this.props.rapper.name}</h2>
        <img
          onClick={this.handleClick}
          src={
            this.state.flip
              ? this.props.rapper.happyImage
              : this.props.rapper.sadImage
          }
          alt=""
          className="rapper"
        />
      </div>
    );
  }
}

export default Rapper;
