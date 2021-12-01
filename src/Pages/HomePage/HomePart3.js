import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionTypes } from "../FilterReducer/action";
import item from "../../Data/CollectionsData";

const HomePart3 = () => {
  const dispatch = useDispatch();
  let name = " ";

  function Shirt() {
    name = "Shirts";
    filter();
  }
  function Casuals() {
    name = "Casuals";
    filter();
  }
  function Hoodies() {
    name = "Hoodies";
    filter();
  }
  function Jeans() {
    name = "Jeans";
    filter();
  }

  const filter = () => {
    dispatch({
      type: actionTypes.GET_FILTERED_SUCCESS,
      payload: item,
      category: name,
    });
  };

  return (
    <div className="collections">
      <h1>-- Men's Collection --</h1>
      <div className="contents">
        <Link to="/collections">
          <div className="box" onClick={() => Shirt()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg"
              alt="T-Shirt"
            />
            <p>T-Shirts</p>
          </div>
        </Link>

        <Link to="/collections">
          <div className="box" onClick={() => Casuals()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/7189947/2018/8/30/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg"
              alt="Casuals"
            />
            <p>Casuals</p>
          </div>
        </Link>
        <Link to="/collections">
          <div className="box" onClick={() => Hoodies()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10167357/2019/9/5/4f59ed7d-e9e4-494a-a3e3-9f0b9c67eee31567682718212-Roadster-Men-Grey-Melange-Solid-Hooded-Sweatshirt-4421567682-1.jpg"
              alt="Hoodie"
            />
            <p>Hoodies</p>
          </div>
        </Link>
        <Link to="/collections">
          <div className="box" onClick={() => Jeans()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/8629551/2019/2/18/cc657436-c58c-4a78-a51c-8f966857ddd01550489916594-Roadster-Men-Blue-Slim-Fit-Mid-Rise-Clean-Look-Jeans-4191550-1.jpg"
              alt="Blue Jeans"
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

export default HomePart3;
