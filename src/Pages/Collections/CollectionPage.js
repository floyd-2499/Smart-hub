import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ItemBox from "./ItemBox";
import ItemData from "../../Data/CollectionsData";

const CollectionPage = () => {
  const [catList, setCatList] = useState(ItemData);
  const [searchItem, setSearchItem] = useState("");
  const [drop, setDrop] = useState(false);
  const [cate, setCate] = useState("none");
  const list = JSON.parse(localStorage.getItem("item-list"));
  useEffect(() => {
    if (list) {
      setCatList(list);
    } else {
      setCatList(ItemData);
    }

    return;
  }, []);

  const filterCategory = [...new Set(ItemData.map((item) => item.category))];
  const filterSection = [
    "All",
    ...new Set(ItemData.map((item) => item.section)),
  ];
  const categories = filterCategory;
  const sections = filterSection;

  const filter = (category) => {
    const filteredCatList = ItemData.filter(
      (data) => data.category === category
    );
    setCatList(filteredCatList);
  };

  const filterSec = (section) => {
    if (section === "All") {
      setCatList(ItemData);
      return;
    }
    const filteredSec = ItemData.filter((data) => data.section === section);
    setCatList(filteredSec);
  };

  function dropEffect() {
    if (drop) {
      setDrop(false);
      setCate("none");
    } else {
      setDrop(true);
      setCate("flex");
    }
  }

  return (
    <div>
      <Header />

      <div className="top-nav">
        <div className="search">
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => {
              setSearchItem(e.target.value);
              setCatList(ItemData);
            }}
          />
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

        <div className="opt" onClick={() => dropEffect()} id="top">
          Categories{" "}
          {!drop ? (
            <i className="fas fa-caret-down"></i>
          ) : (
            <i className="fas fa-caret-up"></i>
          )}
        </div>

        <div className="filter-btn2">
          {categories.map((category, index) => {
            return (
              <p key={index} onClick={() => filter(category)}>
                {category}
              </p>
            );
          })}
        </div>
        <div
          className="filter-btn3"
          style={{ display: `${cate}` }}
          onClick={() => dropEffect()}
        >
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
        {catList
          .filter((val) => {
            if (searchItem === "") {
              return val;
            } else if (
              val.category
                .toLowerCase()
                .includes(searchItem.toLocaleLowerCase())
            ) {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return val;
            } else if (
              val.section.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return val;
            }
          })
          .map((product) => {
            return <ItemBox key={product.id} items={product}></ItemBox>;
          })}
      </div>

      <Footer />
    </div>
  );
};

export default CollectionPage;
