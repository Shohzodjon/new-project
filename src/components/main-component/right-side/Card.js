import React from "react";
import "./card.css";
import { useCart } from "react-use-cart";
const Card = (props) => {
  const { addItem } = useCart();

  return (
    <div className="cart">
      <div className="cart--img">
        <img src={props.img} alt="img" />
      </div>
      <div className="cart--info">
        <h3>{props.title}</h3>
        <p>{props.dec}</p>
      </div>
      <div className="price--box">
        <div className="cart--price">
          <span className="price">{props.price}</span>$
        </div>
        <button className="cart--btn" onClick={() => addItem(props.item)}>
          Add to card
        </button>
      </div>
    </div>
  );
};
export default Card;
