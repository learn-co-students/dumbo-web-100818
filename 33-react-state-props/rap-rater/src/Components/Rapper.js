import React from "react";

class Rapper extends React.Component {
  handleClick = () => {
    this.setState({
      flip: !this.state.flip
    });
  };

  componentDidUpdate() {
    console.log("updated");
  }
  componentWillUnmount() {
    console.log("unmounted Rapper");
  }
  render() {
    return (
      <div>
        <h2>{this.props.rapper.name}</h2> <h3>{this.props.rapper.rating}</h3>
        <img
          onClick={this.handleClick}
          src={
            this.props.idx === 0
              ? this.props.rapper.happyImage
              : this.props.rapper.sadImage
          }
          alt=""
          className="rapper"
        />
        <button onClick={() => this.props.upVoteHandler(this.props.rapper)}>
          Up Vote
        </button>
        <button onClick={() => this.props.downVoteHandler(this.props.rapper)}>
          Down Vote
        </button>
        <button onClick={() => this.props.deleteHandler(this.props.rapper)}>
          Delete Some Stuff
        </button>
      </div>
    );
  }
}

export default Rapper;
