import React from "react";
import StoreApp from "../../assets/imges/appstore.png";
import GooglePlay from "../../assets/imges/googleplay.png";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer--flex">
          <ul>
            <li>
              <a href="#">
                <strong>Company</strong>
              </a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">
                <strong>Support</strong>
              </a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Safety Center</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <strong>Legal</strong>
              </a>
            </li>
            <li>
              <a href="#">Cookies Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Dispute resolution</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <strong>Install App</strong>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={StoreApp} alt="tore--app" />
              </a>
            </li>
            <li>
              <a href="#">
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
                <a href="#">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="#">
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
