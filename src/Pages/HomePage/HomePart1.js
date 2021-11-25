import React from "react";
import Header from "../Components/Header";
import home1 from "../images/home1.svg";

const HomePart1 = () => {
  return (
    <div className="home1">
      <Header />
      <div className="background">
        <h1>SMART</h1>
        <h1>HUB</h1>
      </div>
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>
      <span className="span4"></span>

      <div className="contents">
        <div className="left">
          <img src={home1} alt="" />
        </div>
        <div className="right">
          <h2>Introducing</h2>
          <h1>Staple Ethnic Collection</h1>
          <p>
            The best of 2021 office collection is finally here. Choose amongst
            the best of varieties!
          </p>
          <button>Explore collections </button>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
