import React from "react";
import ad from "../images/ad.svg";
import { Link } from "react-router-dom";

const HomePart2 = () => {
  return (
    <div className="home2">
      <Link to="/collections">
        <img src={ad} alt="ad" />
      </Link>
    </div>
  );
};

export default HomePart2;
