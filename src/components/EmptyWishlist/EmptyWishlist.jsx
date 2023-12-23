import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrowIcon from "../../assets/left-arrow.svg";
import sadderEmoji from "../../assets/sadder-emoji.png";

const EmptyWishlist = () => {
  const navigate = useNavigate();
  return (
    <section className="no-wishes-container">
      <div className="box">
        <div className="emoji-wrapper">
          <img
            src={sadderEmoji}
            alt="Emoji"
          />
        </div>

        <h2>No wish :&#40; </h2>
        <p>You haven't added anything to your wishlist</p>
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

export default EmptyWishlist;
