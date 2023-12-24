import React from "react";
import solidHeartIcon from "../../assets/solid-heart-icon.svg";
import regularHeartIcon from "../../assets/regular-heart-icon.svg";
import addToCartIcon from "../../assets/add-to-cart-icon.svg";
import checkIcon from "../../assets/check-icon.svg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const ProductCard = ({ item }) => {
  const { wishlist, setWishlist, cart, setCart } = useGlobalContext();

  function handleAddToWishlist() {
    if (!wishlist.includes(item)) {
      setWishlist([...wishlist, item]);
    } else {
      let newWishList = [...wishlist];

      const removeItem = () => {
        const index = newWishList.findIndex(el => el.id === item.id);
        if (index !== -1) {
          newWishList.splice(index, 1);
          return newWishList;
        }
      };

      removeItem();

      setWishlist(newWishList);
    }
  }

  function handleAddToCart() {
    item.checktick = false;

    if (!cart.includes(item)) {
      setCart([...cart, item]);
    } else {
      let newArray = [...cart];

      const removeItem = () => {
        const index = newArray.findIndex(el => el.id === item.id);
        if (index !== -1) {
          newArray.splice(index, 1);
          return newArray;
        }
      };

      removeItem();

      item.checktick = true;
      setCart(newArray);
    }
  }

  return (
    <div className="single-product">
      <Link to={`/product-details/${item.id}`}>
        <div className="product-img-wrapper">
          <img
            className="product-img"
            src={item.image}
            alt="product"
          />
        </div>

        <h2>{item.title}</h2>
      </Link>

      <div className="container">
        <div className="price">
          <p>Price:</p>
          <span>{item.price} $</span>
        </div>

        <div className="button-container">
          <button onClick={handleAddToWishlist}>
            {wishlist.includes(item) ? (
              <img
                className="wishlist-solid-icon"
                src={solidHeartIcon}
                alt="Add to wishlist"
              />
            ) : (
              <img
                className="wishlist-regular-icon"
                src={regularHeartIcon}
                alt="Add to wishlist"
              />
            )}
          </button>

          <button onClick={handleAddToCart}>
            {cart.includes(item) ? (
              <img
                className="cart-solid-icon"
                src={checkIcon}
                alt="Add to cart"
              />
            ) : (
              <img
                className="cart-regular-icon"
                src={addToCartIcon}
                alt="Add to cart"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
