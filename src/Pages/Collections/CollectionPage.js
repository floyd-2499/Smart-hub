import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ItemBox from "./ItemBox";
import ItemData from "../../Data/CollectionsData";

const CollectionPage = () => {


  const filterCategory = [...new Set(ItemData.map((item) => item.category))];
  const filterSection = [...new Set(ItemData.map((item) => item.section))];
  const list = JSON.parse(localStorage.getItem('item-list'));

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

  // const mensList = ItemData.filter((x) => x.section === "Men");
  // const filterMensList = (category) => {
  //   const menList = mensList.filter(
  //     (data) => data.category === category
  //   );
  //   setCatList(menList);
  // };

  
  console.log(list);


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
        <div>
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className="filter-btn"
                onClick={() => filter(category)}
              >
                {category}
              </div>
            );
          })}
        </div>
        <div>
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                className="filter-btn"
                onClick={() => filterSec(section)}
              >
                {section}
              </div>
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

      <Footer   setCatList={setCatList} />
    </div>
  );
};

export default CollectionPage;
