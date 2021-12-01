import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ItemBox from "./ItemBox";
import ItemData from "../../Data/CollectionsData";

const CollectionPage = () => {
  const filterCategory = [...new Set(ItemData.map((item) => item.category))];
  const filterSection = [...new Set(ItemData.map((item) => item.section))];
  const list = JSON.parse(localStorage.getItem("item-list"));

  const [catList, setCatList] = useState(list);
  const categories = filterCategory;
  const sections = filterSection;

  const filter = (category) => {
    const filteredCatList = ItemData.filter(
      (data) => data.category === category
    );
    setCatList(filteredCatList);
  };

  const filterSec = (section) => {
    const filteredSec = ItemData.filter((data) => data.section === section);
    setCatList(filteredSec);
  };

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
        <div className="filter-btn">
          {sections.map((section, index) => {
            return (
              <p key={index} onClick={() => filterSec(section)}>
                {section}
              </p>
            );
          })}
        </div>
        <div className="filter-btn">
          {categories.map((category, index) => {
            return (
              <p key={index} onClick={() => filter(category)}>
                {category}
              </p>
            );
          })}
        </div>
      </div>
      <div className="collection-lists">
        {catList.map((product) => {
          return (
            <ItemBox key={product.id} items={product}>
              {" "}
            </ItemBox>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default CollectionPage;
