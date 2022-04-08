import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/imges/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1 className="nav--heading">Lilies</h1>
      </div>
      <div className="form--aplication">
        <div className="home">
          <Link to="/">Home</Link>
        </div>
        <div className="login">
          <Link to="/login">Login</Link>
        </div>
        <div className="sign-up">
          <Link to="/sign">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
