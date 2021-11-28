import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Kids from "./Kids";
import Mens from "./Mens";
import Women from "./Women";

const CollectionPage = () => {
  return (
    <div>
      <Header />

      <div className="top-nav">
        <div className="search">
          <input type="text" placeholder="Search here" />
          <div className="icon">
            <i class="fas fa-search"></i>
          </div>
        </div>
      </div>

      <Kids />
      <Mens />
      <Women />
      <Footer />
    </div>
  );
};

export default CollectionPage;
