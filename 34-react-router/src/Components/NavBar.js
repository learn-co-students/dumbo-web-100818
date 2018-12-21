import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navbar">
      <Link to="/">
        <li className="navitem">Home</li>
      </Link>
      <Link to="/characters">
        <li className="navitem">Characters</li>
      </Link>
      <Link to="/houses">
        <li className="navitem">Houses</li>
      </Link>
      <Link to="login">
        <li className="navitem">Login/Sign Up</li>
      </Link>
    </ul>
  );
};

export default NavBar;
