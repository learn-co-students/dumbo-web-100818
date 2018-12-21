import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CharacterContainer from "./Containers/CharacterContainer";
import HouseEditForm from "./Components/HouseEditForm";
import Home from "./Components/Home";
import Form from "./Components/NewCharacterForm";
import SearchForm from "./Components/SearchForm";
import NavBar from "./Components/NavBar";
import HouseListContainer from "./Containers/HouseListContainer";

class App extends Component {
  state = {
    characters: [],
    filteredArr: [],
    character: {},
    houseSelected: "",
    searchTerm: ""
  };

  componentDidMount() {
    //fetch the data from db JSON
    fetch("http://localhost:3001/potter-stuff")
      .then(res => res.json())
      .then(charList =>
        this.setState({
          characters: charList,
          filteredArr: charList
        })
      );
  }

  handleHouseChange = e => {
    console.log(e);
    //find specific character based on click
    let house = e.target.value;
    this.setState({
      houseSelected: house
    });

    //option 1:
    //grab the specific character based on name
    let newArr = [...this.state.characters];
    //find the index of that character of the obj name you stored in state.
    // let indexOfChar = newArr.findIndex(
    //   y => y.name === this.state.character.name
    // );
    //find char obj via === to character in state
    let character = newArr.find(char => char === this.state.character);
    console.log("chracter", character);
    //change the house of the specifc characer to the hosue Selected.
    character.house = house;
    console.log("character after changing house", character);
  };

  handleCharacterClick = charObj => {
    this.setState({
      character: charObj
    });
  };

  handleSubmit = newChar => {
    let newArr = [...this.state.characters, newChar];
    this.setState({
      characters: newArr
    });
  };

  searchChangeHandler = e => {
    let term = e.target.value;
    let newArr = [...this.state.characters].filter(char =>
      char.name.includes(term)
    );

    this.setState({
      searchTerm: e.target.value,
      filteredArr: newArr
    });
  };
  //change the props for that character

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          {/* Difference between eventListener:{this.callback} vs eventListener:{() => this.callback(arguments)} */}
          <Route
            path="/characters"
            render={() => (
              <CharacterContainer
                characters={this.state.filteredArr}
                handleCharacterClick={this.handleCharacterClick}
              />
            )}
          />
          <Route
            path="/houses"
            render={() => (
              <HouseListContainer
                characters={this.state.filteredArr}
                handleCharacterClick={this.handleCharacterClick}
              />
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
        {/* <br />
          <Form submitHandler={this.handleSubmit} />
          <br />
          <SearchForm
          searchTerm={this.state.searchTerm}
          changeHandler={this.searchChangeHandler}
          />
          <CharacterContainer
          characters={this.state.filteredArr}
          handleCharacterClick={this.handleCharacterClick}
          />
          <HouseEditForm
          character={this.state.filteredArr}
          handleHouseChange={this.handleHouseChange}
          />
          <HouseListContainer
          characters={this.state.filteredArr}
          handleCharacterClick={this.handleCharacterClick}
        /> */}
      </div>
    );
  }
}

export default App;
