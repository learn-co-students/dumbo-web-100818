import React from "react";
import Character from "../Components/Character";

class HouseList extends React.Component {
  listCharacters = () => {
    return this.props.characters.map(char => {
      if (char.house === this.props.house) {
        return (
          <Character
            className="indexImg"
            info={char}
            container="house"
            key={char.name}
            handleCharacterClick={this.props.handleCharacterClick}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div className="houseList">
        <h2> {this.props.house}</h2>
        {this.listCharacters()}
      </div>
    );
  }
}

export default HouseList;
