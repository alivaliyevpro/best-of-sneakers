import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrowIcon from "../../assets/left-arrow.svg";

const MissingPage = () => {
  const navigate = useNavigate();

  return (
    <section className="missing-page">
      <div className="box">
        <h2>404</h2>
        <p>
          The Page you are looking for doesn't exist or an other error occured
        </p>
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
          <h3>Go To Homepage</h3>
        </button>
      </div>
    </section>
  );
};

export default MissingPage;
