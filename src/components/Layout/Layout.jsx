import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useGlobalContext } from "../../context/context";

const Layout = () => {
  const {
    showCart,
    setShowCart,
    isProcessed,
    setIsProcessed,
    order,
    setOrder,
    cart,
    setCart,
    totalAmount,
  } = useGlobalContext();
  return (
    <>
      <Header
        setShowCart={setShowCart}
        totalAmount={totalAmount}
      />
      <Outlet />
      {showCart && (
        <Cart
          cart={cart}
          setCart={setCart}
          showCart={showCart}
          setShowCart={setShowCart}
          totalAmount={totalAmount}
          isProcessed={isProcessed}
          setIsProcessed={setIsProcessed}
          order={order}
          setOrder={setOrder}
        />
      )}
    </>
  );
};

export default Layout;
