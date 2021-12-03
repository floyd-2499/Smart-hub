import React from "react";
import { Link } from "react-router-dom";
import item from "../../Data/CollectionsData";

const Footer = () => {
  const mensList = item.filter((x) => x.section === "Men");
  const kidsList = item.filter((x) => x.section === "Kids");
  const womenList = item.filter((x) => x.section === "Women");

  const filterMensList = (category) => {
    const menList = mensList.filter((data) => data.category === category);
    localStorage.setItem("item-list", JSON.stringify(menList));
  };

  const filterKidsList = (category) => {
    const kidList = kidsList.filter((data) => data.category === category);
    localStorage.setItem("item-list", JSON.stringify(kidList));
  };
  const filterWomenList = (category) => {
    const wList = womenList.filter((data) => data.category === category);
    localStorage.setItem("item-list", JSON.stringify(wList));
  };

  const mLinks = [...new Set(mensList.map((item) => item.category))];
  const kLinks = [...new Set(kidsList.map((item) => item.category))];
  const wLinks = [...new Set(womenList.map((item) => item.category))];

  return (
    <div className="footer">
      <div className="container">
        <div className="options">
          <h1>Collections...</h1>

          <div className="links">
            <div className="column">
              <h1>Men</h1>

              {mLinks.map((category, index) => {
                return (
                  <Link to="/collections" key={index}>
                    <div
                      onClick={() => {
                        filterMensList(category);
                      }}
                    >
                      {category}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="column">
              <h1>Women</h1>
              {wLinks.map((category, index) => {
                return (
                  <Link to="/collections" key={index}>
                    <div onClick={() => filterWomenList(category)}>
                      {category}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="column">
              <h1>Kids</h1>
              {kLinks.map((category, index) => {
                return (
                  <Link to="/collections" key={index}>
                    <div onClick={() => filterKidsList(category)}>
                      {category}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="column">
              <h1>Links</h1>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/favs">Favorites</Link>
              <Link to="/collections">Collections</Link>
            </div>
          </div>
        </div>
        <div className="media">
          <Link to="/">
            <h1>The Smart Hub</h1>
          </Link>
          <div className="media-icons">
            <a href="">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <p>Basthikar Complex</p>
          <p>Near Muttappa Gudi</p>
          <p>Above Corporation Bank</p>
          <p>Shaktinagara, Mangalore</p>
          <p>+91 88613 61726</p>
        </div>
      </div>

      <div className="copyrights">
        <p>© 2021 The Smart Hub | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
