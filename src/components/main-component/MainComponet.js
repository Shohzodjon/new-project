import React from "react";
import LeftSide from "./left-side/LeftSide";
import "./main.css";
import RightSide from "./right-side/RightSide";
import { CartProvider } from "react-use-cart";

const MainComponent = () => {
  return (
    <CartProvider>
      <section className="main--section">
        <div className="container">
          <div className="main--section--flex">
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </section>
    </CartProvider>
  );
};

export default MainComponent;
