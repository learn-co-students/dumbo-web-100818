import React from "react";
import { Link } from "react-router-dom";

const HouseIndex = props => {
  let houses = props.houses.map(house => {
    return (
      <Link to={`/houses/${house}`}>
        <li key={house}>{house}</li>
      </Link>
    );
  });
  return <ul className="houseListContainer">{houses}</ul>;
};

export default HouseIndex;
