import React from 'react'
import Wizard from './Wizard'
import {connect} from 'react-redux'

class WizardDisplay extends React.Component{
  render(){
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {this.props.wizards.map((wizardObj) => {
            return <Wizard key={wizardObj.name} wizard={wizardObj}/>
          })}
        </ul>
      </div>
    )
  }
}

//The return value for this function should be an object, which will be merged into Props
// mapStateToProps takes priority for props
const mapStateToProps = (state) => {
  return {
    wizards: state.wizards
  }
}




const someFunction = connect(mapStateToProps)
const someComponent = someFunction(WizardDisplay)
export default someComponent
