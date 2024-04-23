import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import img from "../../assets/images/header-img.png";
import "../../sass/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__info">
          <div className="header__left">
            <p className="header__left__text">
              Woman’s Fashion <FaAngleRight />
            </p>
            <p className="header__left__text">
              Men’s Fashion <FaAngleRight />
            </p>
            <p className="header__left__text">Electronics</p>
            <p className="header__left__text">Home & Lifestyle</p>
            <p className="header__left__text">Medicine</p>
            <p className="header__left__text">Sports & Outdoor</p>
            <p className="header__left__text">Baby’s & Toys</p>
            <p className="header__left__text">Groceries & Pets</p>
            <p className="header__left__text">Health & Beauty</p>
          </div>
          <div className="header__right">
            <img src={img} alt="header__img" className="header__img" />
            <h2 className="header__title">Up to 10% off Voucher</h2>
            <p className="header__text">
              Shop Now{" "}
              <FaArrowRight style={{ color: "#fafafa", fontSize: "24px" }} />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
