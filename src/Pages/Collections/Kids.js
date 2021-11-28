import React from "react";

const Kids = (props) => {

    const {items} = props;
    console.log(items);

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
          <button>Add To WishList</button>
        </div>


  );
};

export default Kids;
