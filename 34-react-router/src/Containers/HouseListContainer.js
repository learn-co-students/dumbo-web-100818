import React from "react";
import HouseList from "./HouseList";
import { Route, Link } from "react-router-dom";
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
    let houses = this.state.houses.map(house => {
      return (
        <Link to={`/houses/${house}`}>
          <li>{house}</li>
        </Link>
      );
    });
    // <ul className="houseListContainer">{houses}</ul>
    return (
      <div>
        <Route
          path="/houses/:name"
          render={props => {
            console.log(props);
            return (
              <React.Fragment>
                {props.match.params.name ? (
                  <HouseList
                    characters={this.props.characters}
                    house={props.match.params.name}
                    handleCharacterClick={this.props.handleCharacterClick}
                  />
                ) : (
                  <ul className="houseListContainer">{houses}</ul>
                )}
              </React.Fragment>
            );
          }}
        />
      </div>
    );
  }
}

export default HouseListContainer;
