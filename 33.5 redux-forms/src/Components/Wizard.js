import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deleteWizard} from '../redux/actionCreator'

class Wizard extends Component {

  handleClick = () => {
    this.props.deleteWizard(this.props.wizard)
  }

  render() {
    const {wizard} = this.props
    return (
      <div onClick={this.handleClick}>
      <h6>{wizard.name}</h6>
        <p>
          {wizard.house} | {wizard.redux}
        </p>
      </div>
    );
  }
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteWizard: (wizard) => {dispatch({type:"DELETE_WIZARD", payload: wizard})}
//   }
// }

export default connect(null, {deleteWizard})(Wizard);
