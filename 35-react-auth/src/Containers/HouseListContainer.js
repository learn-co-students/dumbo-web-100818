import React from "react";
import HouseList from "./HouseList";
import HouseIndex from "../Components/HouseIndex";
import { Route, Redirect } from "react-router-dom";
class HouseListContainer extends React.Component {
  state = {
    houses: ["Slytherin", "Gryffindor", "HufflePuff", "Ravenclaw"]
  };

  createHouses = () => {
    return this.state.houses.map(house => (
      <HouseList
        characters={this.props.characters}
        house={house}
        handleCharacterClick={this.props.handleCharacterClick}
      />
    ));
  };
  // {this.createHouses()}
  render() {
    // <ul className="houseListContainer">{houses}</ul>
    return (
      <div>
        {this.props.user ? (
          <div>
            <Route
              path="/houses/:name"
              render={props => {
                console.log(props);
                return (
                  <HouseList
                    characters={this.props.characters}
                    house={props.match.params.name}
                    handleCharacterClick={this.props.handleCharacterClick}
                  />
                );
              }}
            />
            <Route
              path="/houses"
              render={props => {
                console.log(props);
                return <HouseIndex houses={this.state.houses} />;
              }}
            />
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default HouseListContainer;
