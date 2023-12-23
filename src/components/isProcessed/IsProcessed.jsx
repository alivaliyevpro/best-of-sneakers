import React from "react";

import successIcon from "../../assets/success-img.png";
import leftArrowIcon from "../../assets/left-arrow.svg";
import { useGlobalContext } from "../../context/context";

const IsProcessed = () => {
  const { setShowCart, order, setIsProcessed } = useGlobalContext();
  return (
    <section className="info-success">
      <div className="content-wrapper">
        <div className="box-img">
          <img
            src={successIcon}
            alt="Success"
          />
        </div>
        <h2>Order is processed</h2>
        <p>
          Your order #{order.length} will soon be transferred to courier
          delivery
        </p>

        <button
          onClick={() => {
            setShowCart(false);
            setIsProcessed(false);
          }}
          className="go-back-btn">
          <span>
            <img
              src={leftArrowIcon}
              alt="left arrow"
            />
          </span>
          <h3>Go back</h3>
        </button>
      </div>
    </section>
  );
};

export default IsProcessed;
