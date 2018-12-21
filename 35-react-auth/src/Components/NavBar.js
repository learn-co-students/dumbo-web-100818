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
      <Link to="/signup">
        <li className="navitem">Sign Up</li>
      </Link>
      <Link to="/login">
        <li className="navitem">Log In</li>
      </Link>
    </ul>
  );
};

export default NavBar;
