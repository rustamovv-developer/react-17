import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoSearch, IoHeartOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import "../../sass/nav.scss";
import { useSelector } from "react-redux";

function Nav() {
  const wishes = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <Link to={"/"}>
            <h2 className="nav__title">Exclusive</h2>
          </Link>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/home"}>
                Contact
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/home"}>
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={"/home"}>
                Sign Up
              </NavLink>
            </li>
          </ul>
          <div className="nav__search">
            <input
              type="text"
              required
              placeholder="What are you looking for?"
              className="nav__input"
            />
            <IoSearch style={{ color: "#000000", fontSize: "24px" }} />
          </div>
          <div className="nav__icons">
            <Link to={"/wishlist"}>
              <IoHeartOutline style={{ color: "#000000", fontSize: "24px" }} />{" "}
              <sup>{wishes.length}</sup>
            </Link>
            <Link to={"/cart"}>
              <RiShoppingCartLine
                style={{ color: "#000000", fontSize: "24px" }}
              />
              <sup>{cart.length}</sup>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
