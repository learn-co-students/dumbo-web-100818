import React from "react";

class NewCharacterForm extends React.Component {
  state = {
    name: "",
    house: "",
    age: "",
    role: "",
    image1: "",
    image2: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      name: "",
      house: "",
      age: "",
      role: "",
      image1: "",
      image2: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="house"
          name="house"
          value={this.state.house}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="age"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="role"
          name="role"
          value={this.state.role}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="image1"
          name="image1"
          value={this.state.image1}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="image2"
          name="image2"
          value={this.state.image2}
          onChange={this.handleChange}
        />
        <button>Add Character</button>
      </form>
    );
  }
}

export default NewCharacterForm;
