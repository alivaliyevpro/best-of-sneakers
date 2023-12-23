import React from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import ProductCard from "../../components/ProductCard/ProductCard";
import EmptyOrder from "../../components/EmptyOrder/EmptyOrder";
import goBackIcon from "../../assets/go-back-icon.svg";
import { useGlobalContext } from "../../context/context";

const OrdersPage = () => {
  const {  order } =
    useGlobalContext();
  const navigate = useNavigate();

  return (
    <>
      {order.length > 0 ? (
        <section className="orders-container">
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
            <h2>My orders</h2>
          </div>
          <div className="order-products">
            {order.flat(1).map(item => {
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
        <EmptyOrder />
      )}
    </>
  );
};

export default OrdersPage;
