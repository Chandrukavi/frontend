import React from "react";

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded shadow">
    <img
      src={`http://localhost:5000/uploads/${product.image}`}
      alt={product.name}
      className="w-full h-32 object-cover"
    />
    <h3 className="font-bold">{product.name}</h3>
    <p>${product.price}</p>
    <p>{product.category}</p>
  </div>
);

export default ProductCard;
