// src/Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://crudcrud.com/api/b25bdbe5904940d4a9e4dd464a752469';

const Products = ({newlyAddedProduct}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your CRUD API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/medicines`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Run this effect only once on component mount

  const addToCart = (product) => {
    // Implement your logic to add the product to the cart
    console.log('Product added to cart:', product);
  };
  const addNewProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} onAddToCart={addToCart} />
          <hr />
        </div>
      ))}
      <h1>Newly Added Product</h1>
      {newlyAddedProduct && (
        <Product product={newlyAddedProduct} onAddToCart={addToCart} />
      )}
      <hr />
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default Products;
