import React from "react";
import { Link } from "react-router-dom";

const HomePart6 = () => {
  return (
    <div className="collections">
      <h1>-- Other Collection --</h1>
      <div className="contents">
        <div className="box">
          <img
            src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14971262/2021/7/29/79f9ad4a-c6b3-4e40-8901-7cd05a740bf31627553250055DChicaGirlsWhiteSolid5.jpg"
            alt="Innerwears"
          />
          <p>Inner Wears</p>
        </div>
        <div className="box">
          <img
            src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16209644/2021/11/23/7dd06bd3-ff86-4e4b-a607-85325ee811681637658248585LYRAWomenPinkSolidChuridar-LengthLeggings1.jpg"
            alt="Leggins"
          />
          <p>Leggins</p>
        </div>
        <div className="box">
          <img
            src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14805210/2021/8/5/e8d86dab-dffb-4534-a034-4ed4c1cf0ea11628164763352-mothercare-Boys-Bodysuit-3471628164762459-4.jpg"
            alt="Infant Care"
          />
          <p>Infant Care</p>
        </div>
        <div className="box">
          <img
            src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6017139/2018/7/5/23e897b5-e6b3-4cbb-8c87-b7b1472b58f21530795166773-Harvard-Men-Navy-Track-Pants-5901530795165309-3.jpg"
            alt="Tracks"
          />
          <p>Track Pants</p>
        </div>
      </div>
      <Link to="/collections">
        <div className="btns">
          <button>Explore More...</button>
        </div>
      </Link>
    </div>
  );
};

export default HomePart6;
