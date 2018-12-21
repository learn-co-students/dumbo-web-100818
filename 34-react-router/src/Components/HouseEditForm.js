import React from "react";

class HouseEditForm extends React.Component {
  render() {
    //pass selected character to handleHouseChange
    //pre-select current wizards house on drop down form
    return (
      <div>
        <h3> {this.props.character.name}</h3>
        <form>
          <select
            onChange={this.props.handleHouseChange}
            value={this.props.character.house}
          >
            <option value="Gryffindor"> Gryffindor </option>
            <option value="Slytherin"> Slytherin </option>
            <option value="HufflePuff"> HufflePuff </option>
            <option value="Ravenclaw"> Ravenclaw </option>
          </select>
        </form>
      </div>
    );
  }
}

export default HouseEditForm;
