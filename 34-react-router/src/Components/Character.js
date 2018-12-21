import React from "react";

class Character extends React.Component {
  state = {
    showDetails: false
  };

  showDetails = e => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  details = () => {
    return (
      <ul>
        <li>{this.props.info.name}</li>
        <li>{this.props.info.age}</li>
        <li>{this.props.info.role}</li>
        <li onClick={() => this.props.handleCharacterClick(this.props.info)}>
          {this.props.info.house}
        </li>
      </ul>
    );
  };

  locationOfCharCard = () => {
    if (!this.props.container) {
      //Character Container Character
      return (
        <div className="charCard">
          <h3> {this.props.info.name} </h3>

          <h3 onClick={() => this.props.handleCharacterClick(this.props.info)}>
            {this.props.info.house}
          </h3>
          <img src={this.props.info.image1} alt="oops" className="indexImg" />
        </div>
      );
    } else {
      //HouseContainer Character
      return (
        <div className="charCard">
          <img
            src={this.props.info.image2}
            alt="oops"
            onClick={e => this.showDetails(e)}
            className="indexImg"
          />
          {this.state.showDetails ? this.details() : null}
        </div>
      );
    }
  };
  render() {
    //if container === CharContainer do 1,2,3...
    //else render img2 instead..

    return <div>{this.locationOfCharCard()}</div>;
  }
}

export default Character;
