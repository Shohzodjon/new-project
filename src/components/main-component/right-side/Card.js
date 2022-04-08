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

{
  /*  
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card  p-0 h-100 ">
        <img src={props.img} className="card-img-top img-fluid" alt="" />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">{props.dec}</p>
          <h5 className="card-title">{props.price}$</h5>
          <button
            className="btn btn-primary"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

*/
}
