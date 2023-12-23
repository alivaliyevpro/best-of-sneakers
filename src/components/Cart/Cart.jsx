import React, { useState } from "react";
import removeIcon from "../../assets/remove-icon.svg";
import rightArrowIcon from "../../assets/right-arrow.svg";
import EmptyCart from "../EmptyCart/EmptyCart";
import IsProcessed from "../isProcessed/IsProcessed";
import { useGlobalContext } from "../../context/context";

const Cart = () => {
  const {
    cart,
    setCart,
    setShowCart,
    totalAmount,
    isProcessed,
    setIsProcessed,
    order,
    setOrder,
  } = useGlobalContext();

  return (
    <section className="cart-container">
      <div
        onClick={() => {
          setShowCart(false);
        }}
        className="transparent-area"></div>

      <div className="cart-content">
        <h2>Cart</h2>

        {cart.length > 0 ? (
          <>
            <div className="cart-items">
              {cart.map(item => {
                return (
                  <div
                    key={item.id}
                    className="cart-item">
                    <div className="cart-item-img">
                      <img
                        src={item.image}
                        alt="Product image"
                      />
                    </div>
                    <div className="cart-item-content">
                      <h3>{item.title}</h3>
                      <p>{item.price} $</p>
                    </div>

                    <button
                      onClick={() => {
                        let newArray = [...cart];

                        const removeItem = () => {
                          const index = newArray.findIndex(
                            el => el.id == item.id
                          );
                          if (index !== -1) {
                            newArray.splice(index, 1);
                            return newArray;
                          }
                        };

                        removeItem();
                        setCart(newArray);
                      }}>
                      <img
                        src={removeIcon}
                        alt="Remove icon"
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="checkout-container">
              <div className="amount">
                <div>
                  <p className="total">Total:</p>
                  <span></span>
                  <p>{totalAmount} $ </p>
                </div>

                <div>
                  <p className="tax">Tax 5%:</p>
                  <span></span>
                  <p>{(totalAmount * 0.05).toFixed(2)} $ </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setOrder([...order, cart]);
                  setCart([]);

                  setIsProcessed(true);
                }}
                className="checkout-btn">
                <p>Checkout</p>
                <span>
                  <img
                    src={rightArrowIcon}
                    alt="right arrow"
                  />
                </span>
              </button>
            </div>
          </>
        ) : isProcessed ? (
          <IsProcessed />
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
};

export default Cart;
