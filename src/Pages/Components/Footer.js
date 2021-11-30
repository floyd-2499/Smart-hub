import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionTypes } from "../FilterReducer/action";
import item from "../../Data/CollectionsData";

const Footer = (props) => {
  const { setCatList} = props;

  const mensList = item.filter((x) => x.section === "Men");
  const filterMensList = (category) => {
    const menList = mensList.filter(
      (data) => data.category === category
    );
    setCatList(menList);
    
  };

  const mLinks = [...new Set(mensList.map((item) => item.category))]



  return (
    <div className="footer">
      <div className="container">
        <div className="options">
          <h1>Collections...</h1>

          <div className="links">
            <div className="column">
              <h1>Men</h1>
              <div>
                {mLinks.map((category, index) => {
                  return (
                    <Link to="/collections" key={index}>
                      <div onClick={() => filterMensList(category)}>
                        {category}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="column">
              <h1>Women</h1>
              <Link to="/collections">Kurtis</Link>
              <Link to="/collections">Sarees</Link>
              <Link to="/collections">Jeans</Link>
              <Link to="/collections">Tops</Link>
              <Link to="/collections">Inner Wears</Link>
            </div>
            <div className="column">
              <h1>Kids</h1>
              <Link to="/collections">Shirts</Link>
              <Link to="/collections">Jeans</Link>
              <Link to="/collections">Dress</Link>
              <Link to="/collections">Inner Wears</Link>
              <Link to="/collections">Clothing Sets</Link>
            </div>
            <div className="column">
              <h1>Links</h1>
              <Link to="/collections">Home</Link>
              <Link to="/collections">Contact</Link>
              <Link to="/collections">Favorites</Link>
              <Link to="/collections">Collections</Link>
              <Link to="/collections">Search</Link>
            </div>
          </div>
        </div>
        <div className="media">
          <h1>The Smart Hub</h1>
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
