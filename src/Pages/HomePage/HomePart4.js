import React from "react";
import { Link } from "react-router-dom";
import item from "../../Data/CollectionsData";
import { useDispatch } from "react-redux";
import { actionTypes } from "./womensFilter/action";

const HomePart4 = () => {
  const dispatch = useDispatch();
  let name = " ";

  function Top() {
    name = "Tops";
    filter();
  }
  function Kurta() {
    name = "Kurta";
    filter();
  }
  function nights() {
    name = "Night Dress";
    filter();
  }
  function Leggings() {
    name = "Leggings";
    filter();
  }

  const filter = () => {
    dispatch({
      type: actionTypes.GET_FILTERED_WOMEN_SUCCESS,
      payload: item,
      category: name,
    });
  };
  return (
    <div className="collections">
      <h1>-- Women's Collection --</h1>
      <div className="contents">
        <Link to="/collections">
          <div className="box" onClick={() => Top()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14704112/2021/7/3/70112073-25f3-45e7-a671-9d613b5d7a061625325487514-Janasya-Navy-Blue-Floral-Georgette-A-Line-Top-84716253254869-1.jpg"
              alt="Tops"
            />
            <p>Tops</p>
          </div>
        </Link>

        <Link to="/collections">
          <div className="box" onClick={() => Kurta()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15867728/2021/10/19/6d5fe02e-9095-45ca-8f91-931e27f96e571634652546039SochWomenMustardYellowFloralPrintedThreadWorkKurta5.jpg"
              alt="Kurta"
            />
            <p>Kurta</p>
          </div>
        </Link>
        <Link to="/collections">
          <div className="box" onClick={() => nights()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12185286/2020/12/14/e0f75b64-293c-4a08-b48e-52daaf3cc8341607927784287-DressBerry-Women-Night-suits-5731607927782093-1.jpg"
              alt="Night Dress"
            />
            <p>Night Dress</p>
          </div>
        </Link>
        <Link to="/collections">
          <div className="box" onClick={() => Leggings()}>
            <img
              src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/4/20/35af88cd-a7d1-4924-9e8c-02cbb5145a8a1555701419994-2.jpg"
              alt="Leggings"
            />
            <p>Leggings</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePart4;
