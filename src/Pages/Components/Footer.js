import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="options">
          <h1>Collections...</h1>

          <div className="links">
            <div className="column">
              <h1>Men</h1>
              <Link to=" /">T-Shirts</Link>
              <Link to=" /">Shirts</Link>
              <Link to=" /">Jeans</Link>
              <Link to=" /">Hoodies</Link>
              <Link to=" /">Inner Wears</Link>
            </div>
            <div className="column">
              <h1>Women</h1>
              <Link to=" /">Kurtis</Link>
              <Link to=" /">Sarees</Link>
              <Link to=" /">Jeans</Link>
              <Link to=" /">Tops</Link>
              <Link to=" /">Inner Wears</Link>
            </div>
            <div className="column">
              <h1>Kids</h1>
              <Link to=" /">Shirts</Link>
              <Link to=" /">Jeans</Link>
              <Link to=" /">Dress</Link>
              <Link to=" /">Inner Wears</Link>
              <Link to=" /">Clothing Sets</Link>
            </div>
            <div className="column">
              <h1>Links</h1>
              <Link to=" /">Home</Link>
              <Link to=" /">Contact</Link>
              <Link to=" /">Favorites</Link>
              <Link to=" /">Collections</Link>
              <Link to=" /">Search</Link>
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
