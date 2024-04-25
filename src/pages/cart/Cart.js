import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "../../sass/cart.scss";
import { Link } from "react-router-dom";
import { decCart, incCart } from "../../context/cartSlice";

function Cart() {
  let dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let carts = useSelector((s) => s.cart.value);
  let pr = carts.map((el) => (
    <div key={el.id} className="cart__card">
      <div className="cart__exam">
        <img src={el.images[0]} alt="cart__img" className="cart__img" />
        <h2 className="cart__title">{el.title}</h2>
      </div>
      <h3 className="cart__h3">${el.price * el.quantity}</h3>
      <div className="cart__box">
        <p className="cart__text">{el.quantity}</p>
        <div className="cart__div">
          <IoIosArrowUp onClick={() => dispatch(incCart(el))} />
          <IoIosArrowDown
            disabled={el.quantity <= 1}
            onClick={() => dispatch(decCart(el))}
          />
        </div>
      </div>
      <h3 className="cart__h3">${el.price}</h3>
    </div>
  ));
  return (
    <section className="cart">
      <div className="container">
        <div className="cart__top">
          <h2 className="cart__top__title">Product</h2>
          <h2 className="cart__top__title">Price</h2>
          <h2 className="cart__top__title">Quantity</h2>
          <h2 className="cart__top__title">Subtotal</h2>
        </div>
        <div className="cart__info">{pr}</div>
        <div className="cart__center">
          <button className="cart__center__btn">Return To Shop</button>
          <button className="cart__center__btn">Update Cart</button>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom__box">
            <input
              type="text"
              placeholder="Coupon Code"
              className="cart__bottom__input"
            />
            <button className="cart__bottom__btn">Apply Coupon</button>
          </div>
          <div className="cart__bottom__card">
            <h2 className="cart__bottom__title">Cart Total</h2>
            <div className="cart__bottom__exam">
              <h3 className="cart__bottom__h3">Subtotal:</h3>
              <p className="cart__bottom__text">$1750</p>
            </div>
            <hr className="cart__bottom__hr" />
            <div className="cart__bottom__exam">
              <h3 className="cart__bottom__h3">Shipping:</h3>
              <p className="cart__bottom__text">Free</p>
            </div>
            <hr className="cart__bottom__hr" />
            <div className="cart__bottom__exam">
              <h3 className="cart__bottom__h3">Total:</h3>
              <p className="cart__bottom__text">$1750</p>
            </div>
            <Link to={"/checkout"}>
              <button className="cart__bottom__btn">Procees to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
