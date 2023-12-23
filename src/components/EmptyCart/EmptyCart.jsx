import React from "react";
import emptyBox from "../../assets/empty-box.png";
import leftArrowIcon from "../../assets/left-arrow.svg";
import { useGlobalContext } from "../../context/context";

const EmptyCart = () => {
  const { setShowCart } = useGlobalContext();

  return (
    <section className="info-empty">
      <div className="content-wrapper">
        <div className="box-img">
          <img
            src={emptyBox}
            alt="Empty Box"
          />
        </div>
        <h2>Cart empty</h2>
        <p>Add at least one pair of sneakers to complete your order.</p>

        <button
          onClick={() => {
            setShowCart(false);
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

export default EmptyCart;
