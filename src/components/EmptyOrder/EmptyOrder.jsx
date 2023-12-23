import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrowIcon from "../../assets/left-arrow.svg";
import sadEmoji from "../../assets/sad-emoji.png";

const EmptyOrder = () => {
  const navigate = useNavigate();

  return (
    <section className="no-orders-container">
      <div className="box">
        <div className="emoji-wrapper">
          <img
            src={sadEmoji}
            alt="Emoji"
          />
        </div>

        <h2>You have no orders</h2>
        <p>But don't worry, you can start shopping right now!</p>
        <button
          className="go-back-btn"
          onClick={() => {
            navigate("/");
          }}>
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

export default EmptyOrder;
