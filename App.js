import React,{useState} from 'react'
import './App.css';
import Form from './Components/Form';
import Products from './Components/Products';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Cart from './Components/Cart';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [newlyAddedProduct, setNewlyAddedProduct] = useState(null);

  const addProductToCart = (product) => {
    const existingItem = cartItems.find((item) => item.product.id === product.id);
  
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { product, quantity: 1 }]);
    }
  
    // Set the newly added product to be displayed on the /cart route
    setNewlyAddedProduct(product);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/cart" element={<Cart cartItems={cartItems} newlyAddedProduct={newlyAddedProduct} />} />
          <Route path="/" element={<>
            <Form onProductAdd={addProductToCart} />
            <Products newlyAddedProduct={newlyAddedProduct} />
          </>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;