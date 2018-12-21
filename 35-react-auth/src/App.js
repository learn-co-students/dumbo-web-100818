import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import CharacterContainer from "./Containers/CharacterContainer";
// import HouseEditForm from "./Components/HouseEditForm";
import Home from "./Components/Home";
// import Form from "./Components/NewCharacterForm";
// import SearchForm from "./Components/SearchForm";
import NavBar from "./Components/NavBar";
import SignupForm from "./Components/SignupForm";
import LoginForm from "./Components/LoginForm";
import HouseListContainer from "./Containers/HouseListContainer";

class App extends Component {
  state = {
    user: null,
    characters: [],
    filteredArr: [],
    character: {},
    houseSelected: "",
    searchTerm: ""
  };

  componentDidMount() {
    this.fetchCharacters();
    let token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/v1/current_user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Action: "application/json",
        Authorization: `${token}`
      }
    });
  }

  fetchCharacters = () => {
    fetch("http://localhost:3001/potter-stuff")
      .then(res => res.json())
      .then(charList =>
        this.setState({
          characters: charList,
          filteredArr: charList
        })
      );
  };

  signupFormSubmitHandler = (e, userInfo) => {
    e.preventDefault();
    this.createUser(userInfo);
    this.props.history.push("/");
  };
  loginSubmitHandler = (e, userInfo) => {
    e.preventDefault();
    this.getUser(userInfo);
    this.props.history.push("/");
  };

  createUser = userInfo => {
    fetch("http://localhost:3000/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: userInfo.signupUsername,
          password: userInfo.signupPassword
        }
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        localStorage.setItem("token", resp.jwt);
        this.setState({
          user: resp.user
        });
      });
  };
  getUser = userInfo => {
    fetch("http://localhost:3000/api/v1/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: userInfo.loginUsername,
          password: userInfo.loginPassword
        }
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        localStorage.setItem("token", resp.jwt);
        this.setState({
          user: resp.user
        });
      });
  };

  handleHouseChange = e => {
    let house = e.target.value;
    this.setState({
      houseSelected: house
    });
    let newArr = [...this.state.characters];
    let character = newArr.find(char => char === this.state.character);
    console.log("chracter", character);
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
    console.log("IN APP", this.state.user);
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
                user={this.state.user}
                characters={this.state.filteredArr}
                handleCharacterClick={this.handleCharacterClick}
              />
            )}
          />
          <Route
            path="/signup"
            render={() => (
              <SignupForm
                signupFormSubmitHandler={this.signupFormSubmitHandler}
                handleCharacterClick={this.handleCharacterClick}
              />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <LoginForm
                loginSubmitHandler={this.loginSubmitHandler}
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

export default withRouter(App);
