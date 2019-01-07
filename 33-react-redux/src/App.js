import React, { Component } from 'react';
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
