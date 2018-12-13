import React from "react";
import Rapper from "../Components/Rapper";

class RapperContainer extends React.Component {
  render() {
    let list = this.props.rapperList.map((rapper, idx) => {
      return (
        <Rapper
          key={rapper.name}
          idx={idx}
          rapper={rapper}
          upVoteHandler={this.props.upVoteHandler}
          downVoteHandler={this.props.downVoteHandler}
          deleteHandler={this.props.deleteHandler}
        />
      );
    });

    return <div>{list} </div>;
  }
}

export default RapperContainer;
