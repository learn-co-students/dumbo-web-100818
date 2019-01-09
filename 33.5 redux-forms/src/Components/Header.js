import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../redux/actionCreator'

class Header extends Component {

  handleClick = () => {
    this.props.addWizard({
      name: "100818",
      house: "Flatiron",
      redux: "Mastery"
    })
  }
  render() {
    return (
      <header className="App-header">
        <img src={"https://image.flaticon.com/icons/svg/135/135869.svg"} className="App-logo" alt="logo" />
        <p>Harry Potter of Redux</p>
        <button onClick={this.handleClick}>CLICK ME</button>
      </header>
    );
  }

}

export default connect(null, {addWizard})(Header);
