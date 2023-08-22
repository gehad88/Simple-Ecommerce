import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Style/ProductsList.css"; // Import the CSS file for styling

function ProductsList() {
  const api_Url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(api_Url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="card-container">
        {products.map((item) => (
          <Product
            key={item.id}
            product={item}
            ShowDetailsButton={true}
            Price={false}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
