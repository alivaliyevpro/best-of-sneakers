import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "sonner";
import Rating from "@mui/material/Rating";
import goBackIcon from "../../assets/go-back-icon.svg";
import { useGlobalContext } from "../../context/context";

const ProductDetails = () => {
  const { result, wishlist, setWishlist, cart, setCart } = useGlobalContext();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <section className="product-details-container">
      <div className="nav">
        <Toaster
          position="bottom-center"
          expand={true}
        />
        <button
          onClick={() => {
            navigate("/");
          }}>
          <img
            src={goBackIcon}
            alt="Back to home"
          />
        </button>
        <h2>Product details</h2>
      </div>
      {result
        .filter(item => item.id == params.id)
        .map(item => {
          return (
            <div
              key={item.id}
              className="product-details">
              <div className="product-image-wrapper">
                <img
                  src={item.image}
                  alt="Product image"
                />
              </div>

              <div className="product-info">
                <div className="text-content">
                  <h3 className="category">{item.category}</h3>

                  <h2>{item.title}</h2>

                  <div className="rating-box">
                    <Rating
                      name="half-rating-read"
                      defaultValue={item.rating.rate}
                      precision={0.1}
                      readOnly
                    />
                    <p className="rating">{item.rating.rate}</p>

                    <p className="review-count">
                      ({item.rating.count} customer reviews)
                    </p>
                  </div>

                  <p className="price-text">PRICE</p>
                  <p className="price">{item.price} $</p>

                  <p className="desc">{item.description}</p>
                </div>
                <div className="buttons">
                  <button
                    className="add-to-wishlist"
                    onClick={() => {
                      if (!wishlist.includes(item)) {
                        setWishlist([...wishlist, item]);
                        toast("♥️ Added to wish list");
                      } else {
                        let newWishList = [...wishlist];

                        const removeItem = () => {
                          const index = newWishList.findIndex(
                            el => el.id == item.id
                          );
                          if (index !== -1) {
                            newWishList.splice(index, 1);
                            return newWishList;
                          }
                        };

                        removeItem();

                        setWishlist(newWishList);
                        toast("💔 Removed from wish list");
                      }
                    }}>
                    Add To Wish List
                  </button>
                  <button
                    className="add-to-cart"
                    onClick={() => {
                      item.checktick = false;
                      setCart([...cart, item]);
                      toast("✅ Added to cart");
                    }}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default ProductDetails;
