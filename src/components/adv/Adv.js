import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import "../../sass/adv.scss";

function Adv() {
  return (
    <div className="adv">
      <div className="container">
        <div className="adv__info">
          <div className="adv__left">
            <h2 className="adv__title">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h2>
            <p className="adv__text">ShopNow</p>
          </div>
          <div className="adv__right">
            <h2 className="adv__title">English</h2>
            <FaAngleDown style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adv;
