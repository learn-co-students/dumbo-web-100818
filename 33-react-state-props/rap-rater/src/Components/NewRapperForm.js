import React, { Component } from "react";

class NewRapperForm extends Component {
  state = {
    name: "",
    happyImage: "",
    sadImage: "",
    rating: 0
  };

  handleChange = e => {
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      name: "",
      happyImage: "",
      sadImage: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="happyImage"
          name="happyImage"
          value={this.state.happyImage}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="sadImage"
          name="sadImage"
          value={this.state.sadImage}
          onChange={this.handleChange}
        />
        <button>Create Rapper</button>
      </form>
    );
  }
}

export default NewRapperForm;

//happy: http://i55.tinypic.com/1126ee8.jpg
//sad: https://rap.de/wp-content/uploads/Eminem-1.jpg
