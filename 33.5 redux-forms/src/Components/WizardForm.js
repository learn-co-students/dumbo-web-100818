import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../redux/actionCreator'

class WizardForm extends Component {

  state = {
    name: "",
    house: "",
    redux: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const wizardObject = this.state
    this.props.addWizard(wizardObject)
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <label>
          House
        </label>
          <input type="text" name="house" value={this.state.house}  onChange={this.handleChange}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" value={this.state.redux}  onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }

}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addWizard: (wizardObj) => {dispatch({type: "ADD_WIZARD", payload: wizardObj})}
//   }
// }



//addWizard is an actionCreator that we've imported
export default connect(null, {addWizard})(WizardForm);
