import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobnav, setMobnav] = useState("none");

  function click() {
    console.log("btn click");
    setMobnav("flex");
    setTimeout(() => {
      setMobnav("none");
    }, 4000);
  }
  function closeClick() {
    setMobnav("none");
  }

  return (
    <div>
      <div className="header">
        <h1 className="logo">
          <Link to="/">The Smart Hub</Link>
        </h1>

        <div className="bar" onClick={() => click()}>
          <i className="fas fa-bars"></i>
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/favs">
            <i className="fas fa-heart"></i>
          </Link>
        </div>
      </div>
      <div className="mobile-links" style={{ display: `${mobnav}` }}>
        <div className="btn">
          <i className="fas fa-times" onClick={() => closeClick()}></i>
        </div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/favs">Favorites</Link>
      </div>
    </div>
  );
};

export default Header;
