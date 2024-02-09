// src/Cart.js
import React from 'react';

const Cart = ({ cartItems, newlyAddedProduct }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {newlyAddedProduct && (
        <div>
          <p>Product added to cart:</p>
          <p>Name: {newlyAddedProduct.name}</p>
          <p>Description: {newlyAddedProduct.description}</p>
          <p>Price: ${newlyAddedProduct.price}</p>
          <p>Quantity: {newlyAddedProduct.quantity}</p>
          <hr />
        </div>
      )}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.product.id}>
              <p>{item.product.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.product.price * item.quantity}</p>
              <hr />
            </div>
          ))}
          <p>Total Cart Price: ${cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
