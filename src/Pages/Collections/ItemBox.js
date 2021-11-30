import React from "react";

const ItemBox = (props) => {

    const {items} = props;

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
          <button><i className="far fa-heart"></i>Add To WishList</button>
        </div>


  );
};

export default ItemBox;
