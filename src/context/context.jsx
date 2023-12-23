import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [result, setResult] = useState([]);
  const [order, setOrder] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        showCart,
        setShowCart,
        isProcessed,
        setIsProcessed,
        result,
        setResult,
        order,
        setOrder,
        wishlist,
        setWishlist,
        cart,
        setCart,
        totalAmount,
        setTotalAmount,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
