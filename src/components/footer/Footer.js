import React from "react";
import { LuSendHorizonal } from "react-icons/lu";
import imgQR from "../../assets/images/QR.png";
import links from "../../assets/images/links.png";
import "../../sass/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <div className="footer__left">
            <h2 className="footer__title">Exclusive</h2>
            <h3 className="footer__h3">Subscribe</h3>
            <p className="footer__text">Get 10% off your first order</p>
            <div className="footer__send">
              <input
                type="text"
                placeholder="Enter your email"
                className="footer__input"
              />
              <LuSendHorizonal style={{ color: "#fff", fontSize: "20px" }} />
            </div>
          </div>
          <div className="footer__center">
            <ul className="footer__list">
              <h3 className="footer__h3">Support</h3>
              <p className="footer__text">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="footer__text">exclusive@gmail.com</p>
              <p className="footer__text">+88015-88888-9999</p>
            </ul>
            <ul className="footer__list">
              <h3 className="footer__h3">Account</h3>
              <p className="footer__text">My Account</p>
              <p className="footer__text">Login / Register</p>
              <p className="footer__text">Cart</p>
              <p className="footer__text">Wishlist</p>
              <p className="footer__text">Shop</p>
            </ul>
            <ul className="footer__list">
              <h3 className="footer__h3">Quick Link</h3>
              <p className="footer__text">Privacy Policy</p>
              <p className="footer__text">Terms Of Use</p>
              <p className="footer__text">FAQ</p>
              <p className="footer__text">Contact</p>
            </ul>
          </div>
          <div className="footer__right">
            <h3 className="footer__h3">Download App</h3>
            <h4 className="footer__h4">Save $3 with App New User Only</h4>
            <img
              src={imgQR}
              alt="QR"
              className="footer__qr"
              style={{ marginBottom: "24px" }}
            />
            <img src={links} alt="links" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
