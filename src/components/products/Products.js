import React, { useEffect, useState } from "react";
import img from "../../assets/images/strelka.png";
import { FaRegHeart, FaHeart, FaRegEye } from "react-icons/fa6";
import stars from "../../assets/images/stars.png";
import "../../sass/products.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";

function Products({ data }) {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.wishlist.value);

  let products = data?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__abs">
        <button onClick={() => dispatch(toggleToWishes(el))}>
          {wishes.some((w) => w.id === el.id) ? (
            <FaHeart
              className="sel__icon"
              style={{ fontSize: "16px", color: "red" }}
            />
          ) : (
            <FaRegHeart className="sel__icon" style={{ fontSize: "16px" }} />
          )}
        </button>
        <FaRegEye className="sel__icon" style={{ fontSize: "16px" }} />
      </div>
      <Link to={`/products/${el.id}`}>
        <img src={el.images[0]} alt="products__img" className="products__img" />
      </Link>
      <h2 className="products__title">{el.title}</h2>
      <div className="products__box">
        <p className="products__text">{el.price}</p>
        <img src={stars} alt="stars" className="products__stars" />
      </div>
      <button className="products__btn">Add To Cart</button>
    </div>
  ));
  return (
    <section className="products">
      <div className="container">
        <div className="sel__top">
          <div className="sel__left">
            <div className="sel__exam">
              <div className="sel__div"></div>
              <h3 className="sel__h3">Our Products</h3>
            </div>
            <h2 className="sel__title">Explore Our Products</h2>
          </div>
          <img src={img} alt="strelka" />
        </div>
        <div className="products__info">{products}</div>
      </div>
    </section>
  );
}

export default Products;
