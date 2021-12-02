import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">The Smart Hub</Link>
      </h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/favs">
          <i className="fas fa-heart"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
