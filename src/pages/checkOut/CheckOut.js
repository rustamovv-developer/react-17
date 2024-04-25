import React from "react";
import img from "../../assets/images/checkout.png";
import "../../sass/checkOut.scss";
import { Link } from "react-router-dom";

function CheckOut() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let carts = JSON.parse(localStorage.getItem("carts"));
  let mappingCarts = carts.map((el) => (
    <div key={el.id} className="checkout__card">
      <div className="checkout__box">
        <img src={el.images[0]} alt="checkout__img" className="checkout__img" />
        <h3 className="checkout__h3">{el.title}</h3>
      </div>
      <p className="checkout__text">{el.price}</p>
    </div>
  ));
  const handleSave = () => {
    checkout: {
    }
  };
  return (
    <section className="checkout">
      <div className="container">
        <h2 className="checkout__title">Billing Details</h2>
        <form action="" className="checkout__info">
          <div className="checkout__left">
            <input
              placeholder="First Name*"
              type="text"
              className="checkout__input"
            />
            <input
              placeholder="Street Address*"
              type="text"
              className="checkout__input"
            />
            <input
              placeholder="Apartment, floor, etc. (optional)"
              type="text"
              className="checkout__input"
            />
            <input
              placeholder="Phone Number*"
              type="text"
              className="checkout__input"
            />
            <div className="checkout__exam">
              <input type="checkbox" checked className="checkout__checkbox" />
              <p className="checkout__text">
                Save this information for faster check-out next time
              </p>
            </div>
          </div>
          <div className="checkout__right">
            <div className="checkout__cards">{mappingCarts}</div>
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
              <Link to={""}>
                <button className="cart__bottom__btn">
                  Procees to checkout
                </button>
              </Link>
            </div>
            <img src={img} alt="img" className="checkout__chekboxes" />
            <div className="cart__bottom__box">
              <input
                type="text"
                placeholder="Coupon Code"
                className="cart__bottom__input"
              />
              <button className="cart__bottom__btn">Apply Coupon</button>
            </div>
            <button
              onClick={handleSave}
              type="submit"
              className="checkout__btn"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CheckOut;
