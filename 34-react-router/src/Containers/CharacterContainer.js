import React from "react";
import Character from "../Components/Character";

//types of components
//--> Presentational Components
//--> don't have state, can have props
//--> Functional/Class Components
//--> Can - usually do - have state

class CharacterContainer extends React.Component {
  render() {
    let list = this.props.characters.map(char => (
      <Character
        key={char.name}
        info={char}
        handleCharacterClick={this.props.handleCharacterClick}
      />
    ));

    return <div className="charContainer">{list}</div>;
  }
}
export default CharacterContainer;
