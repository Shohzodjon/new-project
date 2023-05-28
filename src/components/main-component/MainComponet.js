import React from "react";
import { Outlet } from "react-router-dom";
import LeftSide from "./left-side/LeftSide";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import "./main.css";
import RightSide from "./right-side/RightSide";
import { useLocation } from "react-router-dom";

const MainComponent = () => {
  const location = useLocation();
  console.log(location, "rrrr");
  return (
    <section className="main--section">
      <div className="container">
        <div className="main--section--flex">
          {/* <button className="menu__btn">
            <HiOutlineMenuAlt1 />
          </button> */}
          <LeftSide />
          {location.pathname == "/maincomponent" ? <RightSide /> : ""}
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
