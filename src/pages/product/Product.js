import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import star from "../../assets/images/stars.png";
import pr from "../../assets/images/product.png";
import SellingProducts from "../../components/sellingProducts/SellingProducts";
import "../../sass/product.scss";

function Product() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container">
        <div className="product">
          <div className="product__info">
            <div className="product__left">
              <div className="product__left__images">
                <img
                  src={data?.data?.images[1]}
                  alt="prl"
                  className="product__left__image"
                />
                <img
                  src={data?.data?.images[2]}
                  alt="prl"
                  className="product__left__image"
                />
                <img
                  src={data?.data?.images[3]}
                  alt="prl"
                  className="product__left__image"
                />
                <img
                  src={data?.data?.images[1]}
                  alt="prl"
                  className="product__left__image"
                />
              </div>
              <img
                src={data?.data?.images[0]}
                alt="img"
                className="product__left__img"
              />
            </div>
            <div className="product__right">
              <h2 className="product__title">{data?.data?.title}</h2>
              <img src={star} alt="star" />
              <h3 className="product__h3">{data?.data?.price}</h3>
              <p className="product__text">{data?.data?.description}</p>
              <div className="product__line"></div>
              <img src={pr} alt="pr" />
            </div>
          </div>
        </div>
      </div>
      <SellingProducts />
    </>
  );
}

export default Product;
