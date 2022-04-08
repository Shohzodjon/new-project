import React from "react";
import Logo from "../../../assets/imges/logo.svg";
import { HiHome } from "react-icons/hi";
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
      <ul className="left--side--nav">
        <li>
          <Link to="/">
            <HiHome className="lft--side--icon" />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <div>
            <MdShoppingBag className="lft--side--icon" />
            <span>Orders</span>
          </div>
        </li>
        <li>
          <div>
            <BsFillBookmarkFill className="lft--side--icon" />
            <span>Your Cart</span>
          </div>
          {totalItems === 0 ? (
            <span className="product--count" style={{ color: "crimson" }}>
              {totalItems}
            </span>
          ) : (
            <span className="product--count" style={{ color: "#06e775" }}>
              {totalItems}
            </span>
          )}
        </li>
      </ul>
    </section>
  );
};
export default LeftSide;
