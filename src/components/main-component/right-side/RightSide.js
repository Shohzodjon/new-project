import React from "react";
import Profile from "../../profile/Profile";
import Card from "./Card";
import "./rightSide.css";
import data from "./data.js";
import StateManage from "./StateManage";
const RightSide = () => {
  console.log(data);
  return (
    <section className="right--section">
      <div className="right--side--nav">
        <div>
          <h2>Good morning, Oghenevwede!</h2>
          <p>What delicious meal are you craving today?</p>
        </div>
        <Profile />
      </div>

      <div className="cart--grid">
        {data.productData.map((item, index) => {
          return (
            <>
              <Card
                key={index}
                img={item.img}
                title={item.title}
                dec={item.paraghp}
                price={item.price}
                item={item}
              />
            </>
          );
        })}
      </div>
      <StateManage />
    </section>
  );
};
export default RightSide;
