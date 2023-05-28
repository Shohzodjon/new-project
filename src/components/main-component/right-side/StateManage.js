import React from "react";
import { useCart } from "react-use-cart";
import "./state.css";
const StateManage = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <>
      {isEmpty ? (
        <h1 className="cart--head">Your cart is empty</h1>
      ) : (
        <section className="choose--items">
          <h5>
            Cart ({totalUniqueItems})total Items: ({totalItems})
          </h5>

          <table>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} alt="img" />
                    </td>
                    <td>
                      <p>{item.title}</p>
                    </td>
                    <td>
                      <p>{item.price} $</p>
                    </td>
                    <td>
                      <h2>Quantity ({item.quantity})</h2>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="choose-item--btn minus"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="choose-item--btn add"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="choose-item--btn remove"
                      >
                        Remove item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="total--price">
            <h3>Total Price : {cartTotal} $</h3>
          </div>
          <div className="btn--group">
            <button className="clear--item" onClick={() => emptyCart()}>
              Clear Cart
            </button>
            <button className="buy--item">Buy Now</button>
          </div>
        </section>
      )}
    </>
  );
};

export default StateManage;
