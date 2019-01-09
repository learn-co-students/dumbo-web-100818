import React, { Component } from 'react';
import './App.css';
import WizardDisplay from './Components/WizardDisplay'
import WizardForm from './Components/WizardForm'
import Header from './Components/Header'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <WizardForm/>
        <WizardDisplay lizards={"lizards"}/>
      </div>
    );
  }
}

export default App;
