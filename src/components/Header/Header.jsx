import React from "react";
import logoIcon from "../../assets/logo-icon.png";
import cartIcon from "../../assets/cart-icon.svg";
import heartIcon from "../../assets/heart-icon.svg";
import profileIcon from "../../assets/profile-icon.svg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const Header = () => {
  const { setShowCart, totalAmount } = useGlobalContext();

  return (
    <header>
      <div className="logo-container">
        <img
          src={logoIcon}
          alt="logo"
        />
        <div className="logo-text">
          <h2>best of sneakers</h2>
          <p>Shop the best sneakers</p>
        </div>
      </div>

      <nav>
        <button
          onClick={() => {
            setShowCart(true);
          }}>
          <img
            src={cartIcon}
            alt="Cart-icon"
          />
          <p>{totalAmount} $</p>
        </button>

        <Link to={"/wishlist"}>
          <img
            src={heartIcon}
            alt="Heart-icon"
          />
          <p>Wish List</p>
        </Link>

        <Link to={"/orders"}>
          <img
            src={profileIcon}
            alt="Profile-icon"
          />
          <p>Profile</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
