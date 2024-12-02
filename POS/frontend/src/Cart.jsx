import React from "react";

function Cart({ product, addToCart }) {
  return (
    <div
      style={{
        width: "200px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={product?.image}
        alt={product?.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{product?.name}</h3>
      <p>${product?.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          backgroundColor: "#28a745",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;
