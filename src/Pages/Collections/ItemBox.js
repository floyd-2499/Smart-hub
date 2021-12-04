import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "../Favorites/reducers/action";

const ItemBox = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const [clickFav, setClickFav] = useState(false);

  const addFav = () => {
    dispatch({
      type: actionTypes.GET_FAVORITE_SUCCESS,
      payload: items,
    });
    setClickFav(true);
  };

  return (
    <div className="box">
      <img src={items.img} alt={items.name} />
      <div className="texts">
        <h1>{items.name}</h1>
        <p>{items.description}</p>
        <h2>
          Rs.<span>{items.price}</span>/- <del>Rs.{items.mrp}</del>
        </h2>
      </div>
      {!clickFav ? (
        <button onClick={() => addFav()}>
          <i className="far fa-heart"></i>Add To WishList
        </button>
      ) : (
        <button>
          <i className="fas fa-heart"></i> In Favorites
        </button>
      )}
    </div>
  );
};

export default ItemBox;
