import React from "react";

class SignupForm extends React.Component {
  state = {
    signupUsername: "",
    signupPassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={e => this.props.signupFormSubmitHandler(e, this.state)}>
          <input
            type="text"
            name="signupUsername"
            placeholder="username"
            value={this.state.signupUsername}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="signupPassword"
            placeholder="password"
            value={this.state.signupPassword}
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
