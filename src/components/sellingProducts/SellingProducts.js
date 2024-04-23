import React from "react";
import "../../sass/sell.scss";
import { FaRegHeart, FaRegEye } from "react-icons/fa6";
import img1 from "../../assets/images/sel-1.png";
import img2 from "../../assets/images/sel-2.png";
import img3 from "../../assets/images/sel-3.png";
import img4 from "../../assets/images/sel-4.png";
import stars from "../../assets/images/stars.png";

function SellingProducts() {
  return (
    <section className="sel">
      <div className="container">
        <div className="sel__top">
          <div className="sel__left">
            <div className="sel__exam">
              <div className="sel__div"></div>
              <h3 className="sel__h3">This Month</h3>
            </div>
            <h2 className="sel__title">Best Selling Products</h2>
          </div>
          <button className="sel__btn">View All</button>
        </div>
        <div className="sel__bottom">
          <div className="sel__card">
            <div className="sel__abs">
              <FaRegHeart className="sel__icon" style={{ fontSize: "16px" }} />
              <FaRegEye className="sel__icon" style={{ fontSize: "16px" }} />
            </div>
            <img src={img1} alt="sel-img" className="sel__img" />
            <h2 className="sel__card__title">The north coat</h2>
            <p className="sel__card__text">
              $260 <b className="sel__span">$360</b>
            </p>
            <img src={stars} alt="stars" />
          </div>
          <div className="sel__card">
            <div className="sel__abs">
              <FaRegHeart className="sel__icon" style={{ fontSize: "16px" }} />
              <FaRegEye className="sel__icon" style={{ fontSize: "16px" }} />
            </div>
            <img src={img2} alt="sel-img" className="sel__img" />
            <h2 className="sel__card__title">Gucci duffle bag</h2>
            <p className="sel__card__text">
              $960 <b className="sel__span">$1160</b>
            </p>
            <img src={stars} alt="stars" />
          </div>
          <div className="sel__card">
            <div className="sel__abs">
              <FaRegHeart className="sel__icon" style={{ fontSize: "16px" }} />
              <FaRegEye className="sel__icon" style={{ fontSize: "16px" }} />
            </div>
            <img src={img3} alt="sel-img" className="sel__img" />
            <h2 className="sel__card__title">RGB liquid CPU Cooler</h2>
            <p className="sel__card__text">
              160 <b className="sel__span">$170</b>
            </p>
            <img src={stars} alt="stars" />
          </div>
          <div className="sel__card">
            <div className="sel__abs">
              <FaRegHeart className="sel__icon" style={{ fontSize: "16px" }} />
              <FaRegEye className="sel__icon" style={{ fontSize: "16px" }} />
            </div>
            <img src={img4} alt="sel-img" className="sel__img" />
            <h2 className="sel__card__title">Small BookSelf</h2>
            <p className="sel__card__text">$360</p>
            <img src={stars} alt="stars" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellingProducts;
