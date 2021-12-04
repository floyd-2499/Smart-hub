import React from "react";
import Header from "../Components/Header";
import home1 from "../images/home1.svg";
import { Link } from "react-router-dom";
import item from "../../Data/CollectionsData";
import { useDispatch } from "react-redux";
import { actionTypes } from "./womensFilter/action";


const HomePart1 = () => {
  const dispatch = useDispatch();
  let name = "Tops";

  const filter = () => {
    dispatch({
      type: actionTypes.GET_FILTERED_WOMEN_SUCCESS,
      payload: item,
      category: name,
    });
  };

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
          <h1>Staple Tops Collection</h1>
          <p>
            The best of 2021 Tops collection is finally here. Choose amongst the
            best of varieties!
          </p>
          <Link to="/collections">
            <button onClick={() => filter()}>Explore collections </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePart1;
