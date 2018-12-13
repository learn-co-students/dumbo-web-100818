import React, { Component } from "react";
import logo from "./logo.svg";
import RapperContainer from "./Containers/RapperContainer";
import Form from "./Components/NewRapperForm";
import Search from "./Components/Search";
import "./App.css";

class App extends Component {
  state = {
    rapperList: [],
    filteredList: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/rapperList")
      .then(resp => resp.json())
      .then(rappers => {
        this.setState({
          rapperList: rappers,
          filteredList: rappers
        });
      });
  }

  clickHandler = () => {
    console.log("clicked");
    this.setState({
      day: !this.state.day
    });
  };

  rapperSubmitHandler = rapper => {
    console.log("rapper Submit Handler", rapper);
    let arr = [...this.state.rapperList, rapper];
    this.setState({
      rapperList: arr
    });
  };

  upVoteHandler = rapperObj => {
    let newArr = [...this.state.rapperList];
    let rapper = newArr.find(rapper => rapper === rapperObj);
    rapper.rating++;
    this.setState({
      rapperList: newArr
    });
  };

  downVoteHandler = rapperObj => {
    let newArr = [...this.state.rapperList];
    let rapper = newArr.find(rapper => rapper === rapperObj);
    rapper.rating--;
    this.setState({
      rapperList: newArr
    });
  };

  sortRappers = () => {
    let sortedRappers = [...this.state.filteredList].sort(
      (rapper1, rapper2) => {
        return rapper2.rating - rapper1.rating;
      }
    );
    return sortedRappers;
  };

  deleteHandler = rapperObj => {
    let newArr = [...this.state.rapperList].filter(
      rapper => rapper !== rapperObj
    );
    this.setState({
      rapperList: newArr
    });
  };

  searchHandler = (e, searchTerm) => {
    e.preventDefault();
    let newArr = [...this.state.rapperList].filter(rapper =>
      rapper.name.includes(searchTerm)
    );
    this.setState({
      filteredList: newArr
    });
  };
  render() {
    let sortedArr = this.sortRappers();
    console.log("In APP", this.state);
    return (
      <div>
        {/* <Form /> */}
        <Search searchHandler={this.searchHandler} />
        <RapperContainer
          rapperList={sortedArr}
          upVoteHandler={this.upVoteHandler}
          downVoteHandler={this.downVoteHandler}
          deleteHandler={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;
