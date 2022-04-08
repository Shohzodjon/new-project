import React from "react";
import LoginImg from "../../assets/imges/login.png";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <section className="login--section">
      <div className="container">
        <div className="login--section--flex">
          <div className="login--img">
            <div className="login--img--overlay"></div>
            <img src={LoginImg} alt="Login" />
          </div>

          <form className="login--form">
            <div className="container">
              <h1>Welcome Back!</h1>

              <input type="email" placeholder="Your Email address" />

              <div className="input--wrapp">
                <input type="password" placeholder="Password" id="password" />
                <AiOutlineEye className="eye--icon" />
              </div>

              <button type="submit">
                <Link to="/maincomponent">LOGIN</Link>
              </button>
              <div className="login--form--bottom">
                <p>Create an account</p>
                <p>Forgot Passoword</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
