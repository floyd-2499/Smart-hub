import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import fav from "../images/fav.svg";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favoriteList, setFavoriteList] = useState(
    JSON.parse(localStorage.getItem("list-item"))
  );

  const remove = (product) => {
    let newItem = favoriteList.filter((item) => item.id !== product.id);
    localStorage.setItem("list-item", JSON.stringify(newItem));
    setFavoriteList(newItem);
  };

  console.log(favoriteList);

  return (
    <div>
      <Header />
      <div className="fav">
        {favoriteList.length === 0 ? (
          <div className="emptyList">
            <img src={fav} alt="fav list empty" />
            <h1>You favorites list is empty</h1>
            <Link to="/collections">
              <p>Check Collections</p>
            </Link>
          </div>
        ) : (
          favoriteList.map((item) => {
            return (
              <div className="fav-box">
                <img src={item.img} alt={item.name} />
                <div className="texts">
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>

                  <h2>
                    Rs. <span>{item.price}</span>/-
                  </h2>

                  <div>
                    <button onClick={() => remove(item)}>
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
