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
        <i class="fas fa-search"></i>
        <i class="fas fa-heart"></i>
      </div>
    </div>
  );
};

export default Header;
