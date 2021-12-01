import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionTypes } from "./kidsfilter/action";
import item from "../../Data/CollectionsData";

const HomePart5 = () => {
  const dispatch = useDispatch();
  let name = " ";




  function ShirtKids() {
    name ="Shirts"
    filterK();
    console.log("hello")
  }
  function SetsKids() {
    name ="Clothing Sets"
    filterK();
  }
  function DressKids() {
    name ="Dress"
    filterK();
  }
  function JeansKids() {
    name = "Jeans"
    filterK();
  }

  const filterK = () => {
    dispatch({
      type: actionTypes.GET_FILTERED_KIDS_SUCCESS,
      payload: item,
      category: name,
    });
  };

  return (
    <div className="collections">
      <h1>-- Kids Collection --</h1>
      <div className="contents">
        <Link to="/collections">
          <div className="box" onClick={() => ShirtKids()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15238122/2021/8/24/d60e1f33-1e40-4df1-8378-1837c0e1082a1629785346782BONKIDSBoysMustardYellowPrintedPocketsSlimFitT-shirt1.jpg"
              alt="T-shirts"
            />
            <p>T-Shirts</p>
          </div>
        </Link>
        <Link to="/collections">
          <div className="box" onClick={() => SetsKids()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/24/cf4e4e06-491d-438b-a0a6-afbb6eb9b2b41614164990916-1.jpg"
              alt="Sets"
            />
            <p>Clothing Sets</p>
          </div>
        </Link>
        <Link to="/collections">
          <div className="box" onClick={() => DressKids()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15997244/2021/11/3/e9e50c17-cdd8-40da-a0bc-06727ed4222c1635931512396NYNSHBrownFloralDress1.jpg"
              alt="Dress"
            />
            <p>Dress</p>
          </div>
        </Link>
        <Link to="/collections">
          <div className="box" onClick={() => JeansKids()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15919168/2021/10/25/27c16bce-fa92-42e1-aa4a-be511f62b6b71635151695380ZOLAGirlsTurquoiseBlueSlimFitHigh-RiseJeans1.jpg"
              alt="Jeans Kids"
            />
            <p>Jeans</p>
          </div>
        </Link>
      </div>
      <div className="btns">
        <button>Explore More...</button>
      </div>
    </div>
  );
};

export default HomePart5;
