import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Contact from "./Pages/Contact/Contact";
import CollectionPage from "./Pages/Collections/CollectionPage";
import Favorites from "./Pages/Favorites/Favorites";
import "./css/main.css";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/favs" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
