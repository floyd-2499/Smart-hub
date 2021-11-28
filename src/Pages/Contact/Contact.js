import React from "react";
import contact from '../images/contact.png';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../scss/_contact.scss";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <Header />
        <div className="contents">
          <div className="left">
              <img src={contact} alt="kids" />
          </div>
          <div className="right">
            <h1>Contact Us</h1>
            <p>
              For all your orders and queries please call us or mail us .....
            </p>

            <div className="box">
              <h2>Call Us</h2>
              <p>+91 88613 61726</p>
            </div>
            <div className="box">
              <h2>Mail Us</h2>
              <p>smarthub@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="background">
          <h1>SMART</h1>
          <h1>HUB</h1>
        </div>
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
        <span className="span4"></span>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
