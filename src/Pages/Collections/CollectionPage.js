import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Kids from "./Kids";
import Mens from "./Mens";
import Women from "./Women";
import data from "../../Data/CollectionsData";

const CollectionPage = () => {

  console.log(data);

  return (
    <div>
      <Header />

      <div className="top-nav">
        <div className="search">
          <input type="text" placeholder="Search here" />
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
      <div className="collection-lists">
        {data.map((product) => {
          return <Kids key={product.id} items={product}> </Kids>
        })}
      </div>
      <Mens />
      <Women />
      <Footer />
    </div>
  );
};

export default CollectionPage;
