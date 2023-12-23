import React from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import ProductCard from "../../components/ProductCard/ProductCard";
import EmptyWishlist from "../../components/EmptyWishlist/EmptyWishlist";
import goBackIcon from "../../assets/go-back-icon.svg";
import { useGlobalContext } from "../../context/context";

const WishlistPage = () => {
  const { wishlist } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <>
      {wishlist.length > 0 ? (
        <section className="wishlist-container">
          <Toaster
            position="bottom-center"
            expand={true}
          />
          <div className="nav">
            <button
              onClick={() => {
                navigate("/");
              }}>
              <img
                src={goBackIcon}
                alt="Back to home"
              />
            </button>
            <h2>My wish list</h2>
          </div>
          <div className="wishlist-products">
            {wishlist.map(item => {
              return (
                <ProductCard
                  key={item.id}
                  item={item}
                />
              );
            })}
          </div>
        </section>
      ) : (
        <EmptyWishlist />
      )}
    </>
  );
};

export default WishlistPage;
