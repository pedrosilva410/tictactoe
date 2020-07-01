import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <ul className="nav">
      <li>
        <Link className="nav_item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav_item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav_item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Header;
