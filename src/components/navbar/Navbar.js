import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imges/logo.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    let allList = document.querySelectorAll(".res__link");
    let element = e.target;
    if (element.classList.contains("res__link")) {
      allList.forEach((list) => {
        list.classList.remove("active__link");
      });
      setShow(false);
      element.classList.add("active__link");
    }
  };
  const toggle = () => {
    setShow(true);
  };

  return (
    <nav>
      <div className="container navbar__flex">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h1 className="nav--heading">Lilies</h1>
        </div>
        <ul className="form--aplication">
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="login">
            <Link to="/login">Login</Link>
          </li>
          <li className="sign-up">
            <Link to="/sign">Sign Up</Link>
          </li>
        </ul>
        <div className="menu__icon" onClick={toggle}>
          <HiOutlineMenuAlt3 color="white" fontSize="2.5rem" />
        </div>
      </div>

      <ul className={show ? "respons__nav active__nav" : "respons__nav"}>
        <li onClick={(event) => handleClick(event)}>
          <Link to="/" className="res__link active__link">
            Home
          </Link>
        </li>
        <li onClick={(event) => handleClick(event)}>
          <Link to="/" className="res__link">
            Login
          </Link>
        </li>
        <li onClick={(event) => handleClick(event)}>
          <Link to="/" className="res__link">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
