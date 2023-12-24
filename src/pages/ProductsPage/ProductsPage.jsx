import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGlobalContext } from "../../context/context";

const ProductsPage = () => {
  const { result } = useGlobalContext();
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("LowtoHigh");

  function inputValidator(value) {
    if (value.match("^[A-Za-z0-9_-]*$")) {
      setQuery(value);
    } else {
      toast("ℹ️ Please search by using letters and numbers only");
    }
  }

  const filteredProducts = result.filter(item =>
    item.title.toLowerCase().includes(query)
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortType === "LowtoHigh") {
      return a.price - b.price;
    }
    return b.price - a.price;
  });

  return (
    <section className="products-container">
      <Toaster
        position="top-center"
        expand={true}
      />

      <div className="control-panel">
        <h2>All products</h2>
        <div className="bars">
          <select
            onChange={e => setSortType(e.target.value)}
            name="select-price"
            id="select-price">
            <option value="LowtoHigh">Price: Low to High</option>
            <option value="HightoLow">Price: High to Low</option>
          </select>

          <div className="search-box">
            <i
              className="fa fa-search"
              aria-hidden="true"></i>
            <input
              type="text"
              placeholder="Search..."
              maxLength="100"
              onChange={e => inputValidator(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="products-list">
        {sortedProducts.map(item => {
          return (
            <ProductCard
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductsPage;
