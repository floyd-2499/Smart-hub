import React from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "../Favorites/reducers/action";

const ItemBox = (props) => {
  const {items} = props;
  const dispatch = useDispatch();

  const addFav = () => {
    dispatch ({
      type: actionTypes.GET_FAVORITE_SUCCESS,
      payload: items,
    })
  }
  
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
          <button onClick={() => addFav()}><i className="far fa-heart"></i>Add To WishList</button>
        </div>


  );
};

export default ItemBox;
