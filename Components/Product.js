// src/Product.js
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};


export default Product;
