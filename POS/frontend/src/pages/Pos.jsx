import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Cart from "../Cart";

function Pos() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch products. Please try again later.");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart; // Prevent duplicate items
      }
      return [...prevCart, product];
    });
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <Link to="/">Go to home page</Link>

        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {products.map((product) => (
              <Cart key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#f8f9fa" }}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  borderBottom: "1px solid #ccc",
                  padding: "10px 0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>
          Total: ${cart.reduce((total, item) => total + item.price, 0)}
        </div>
      </div>
    </div>
  );
}

export default Pos;
