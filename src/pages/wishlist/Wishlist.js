import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import img from "../../assets/images/empty.jpg";

function Wishlist() {
  const wishes = useSelector((state) => state.wishlist.value);
  console.log(wishes);
  return (
    <>
      <div className="container">
        <div
          className="top"
          style={{ marginBottom: "60px", paddingTop: "80px" }}
        >
          <h2
            className="top__title"
            style={{
              color: "#000000",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            Wishlist ({wishes.length}) Move All To Bag
          </h2>
        </div>
      </div>
      {wishes.length ? (
        <div className="container">
          <Products data={wishes} />
        </div>
      ) : (
        <div className="container">
          <img
            src={img}
            alt="emmpty"
            style={{
              display: "flex",
              margin: "auto",
              paddingBottom: "50px",
              width: "100%",
              height: "500px",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
}

export default Wishlist;
