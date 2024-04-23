import React from "react";
import img from "../../assets/images/categories__img.png";
import "../../sass/categories.scss";

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__info">
          <div className="categories__left">
            <h3 className="categories__h3">Categories</h3>
            <h2 className="categories__title">Enhance Your Music Experience</h2>
            <div className="categories__divs">
              <div className="categories__card">
                <h2 className="categories__card__title">23</h2>
                <p className="categories__card__text">Hours</p>
              </div>
              <div className="categories__card">
                <h2 className="categories__card__title">05</h2>
                <p className="categories__card__text">Days</p>
              </div>
              <div className="categories__card">
                <h2 className="categories__card__title">59</h2>
                <p className="categories__card__text">Minutes</p>
              </div>
              <div className="categories__card">
                <h2 className="categories__card__title">35</h2>
                <p className="categories__card__text">Seconds</p>
              </div>
            </div>
            <button className="categories__btn">Buy Now!</button>
          </div>
          <img src={img} alt="categories__img" className="categories__img" />
        </div>
      </div>
    </section>
  );
}

export default Categories;
