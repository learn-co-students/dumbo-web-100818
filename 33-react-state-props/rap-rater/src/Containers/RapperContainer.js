import React from "react";
import Rapper from "../Components/Rapper";
import RapperList from "../rapperList";

class RapperContainer extends React.Component {
  state = {
    rapperList: RapperList
  };

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

  render() {
    let list = this.state.rapperList.map(rapper => {
      return <Rapper key={rapper.name} rapper={rapper} />;
    });

    return <div>{list}</div>;
  }
}

export default RapperContainer;
