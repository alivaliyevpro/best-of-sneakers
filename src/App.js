import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.css";

import Layout from "./components/Layout/Layout";

import ProductsPage from "./pages/ProductsPage/ProductsPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MissingPage from "./pages/MissingPage/MissingPage";
import { useGlobalContext } from "./context/context";

const URL = "https://fakestoreapi.com/products";

function App() {
  const { setResult, cart, setTotalAmount } = useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(URL);
        const resp = await req.json();
        setResult(assignCheckTickProperty(resp));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    calcTotalAmount();
  }, [cart, calcTotalAmount]);

  function assignCheckTickProperty(arr) {
    return arr.map(obj => ({ ...obj, checktick: false }));
  }

  function calcTotalAmount() {
    let total = 0;

    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
      }
    }
    return setTotalAmount(total.toFixed(2));
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}>
        <Route
          index
          element={<ProductsPage />}
        />
        <Route
          path="product-details/:id"
          element={<ProductDetails />}
        />

        <Route
          path="wishlist"
          element={<WishlistPage />}
        />
        <Route
          path="orders"
          element={<OrdersPage />}
        />

        <Route
          path="*"
          element={<MissingPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
