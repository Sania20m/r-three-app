// src/Form.js
import React, { useState } from 'react';
import axios from 'axios'

const API_BASE_URL = 'https://crudcrud.com/api/b25bdbe5904940d4a9e4dd464a752469';
// const axios='https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.7/axios.min.js'
const Form = ({ onProductAdd }) => {

  const [medicine, setMedicine] = useState({
    name: '',
    description: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your CRUD API
      const response = await axios.post(`${API_BASE_URL}/medicines`, medicine);
      console.log('Medicine added successfully:', response.data);
      // Clear the form after successful submission
      onProductAdd(response.data);
      setMedicine({
        name: '',
        description: '',
        price: '',
        quantity: ''
      });
    } catch (error) {
      console.error('Error adding medicine:', error);
    }
  };

  return (
    <div>
      <h1>Medicine Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Medicine Name:
          <input type="text" name="name" value={medicine.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Medicine Description:
          <textarea name="description" value={medicine.description} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Medicine Price:
          <input type="number" name="price" value={medicine.price} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" name="quantity" value={medicine.quantity} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default Form;
