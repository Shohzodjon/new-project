import React from "react";
import Logo from "../../../assets/imges/logo.svg";
import { HiHome, HiMenuAlt2 } from "react-icons/hi";
import { BsFillBookmarkFill } from "react-icons/bs";

import { MdShoppingBag } from "react-icons/md";
import { useCart } from "react-use-cart";
import "./leftSide.css";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const { totalItems } = useCart();
  return (
    <section className="left--side">
      <div className="left--side--logo">
        <img src={Logo} alt="Logo" />
        <h1>
          <Link to="/">Lilies</Link>
        </h1>
      </div>

      <div className="menu__wrapper">
        <HiMenuAlt2 className="lft--side--icon" />
      </div>
      <ul className="left--side--nav">
        <li>
          <Link to="/" className="nav__router__link">
            <div>
              <HiHome className="lft--side--icon" />
              <span>Dashboard</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/maincomponent" className="nav__router__link">
            <div>
              <MdShoppingBag className="lft--side--icon" />
              <span>Orders</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="store" className="nav__router__link">
            <div>
              <BsFillBookmarkFill className="lft--side--icon" />
              <span>Your Cart</span>
            </div>
            <span className="product--count">{totalItems}</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};
export default LeftSide;
