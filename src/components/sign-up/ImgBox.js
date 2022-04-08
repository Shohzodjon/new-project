import React from "react";
import SignImg from "../main-component/right-side/img/food_2.png";
const ImgBox = () => {
  return (
    <div className="sign--section--img">
      <div className="login--img--overlay"></div>
      <img src={SignImg} alt="Sign" />
    </div>
  );
};
export default ImgBox;
