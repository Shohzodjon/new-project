import React from "react";
import StoreApp from "../../assets/imges/appstore.png";
import GooglePlay from "../../assets/imges/googleplay.png";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer--flex">
          <ul>
            <li>
              <Link to="/">
                <strong>Company</strong>
              </Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/">
                <strong>Support</strong>
              </Link>
            </li>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">Safety Center</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">
                <strong>Legal</strong>
              </Link>
            </li>
            <li>
              <Link to="/">Cookies Policy</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Services</Link>
            </li>
            <li>
              <Link to="/">Dispute resolution</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">
                <strong>Install App</strong>
              </Link>
            </li>
            <li>
              <a href="https://www.apple.com/ru/app-store" target="_blank">
                <img src={StoreApp} alt="tore--app" />
              </a>
            </li>
            <li>
              <a
                href="https://play.google.com/store/apps?hl=ru"
                target="_blank"
              >
                <img src={GooglePlay} alt="google--play" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer--bottom">
        <div className="container">
          <div className="footer--bottom-flex">
            <h4>&copy; 2021 LILIES, All rights reserved</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=en" target="_blank">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank">
                  <BsYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
