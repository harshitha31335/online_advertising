// ProductList.js
import React, { useState } from 'react';

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 100 },
    { id: 2, name: 'Mouse', price: 20 },
    { id: 2, name: 'Galaxy M11', price: 250 },
    { id: 2, name: 'Vivo', price: 200 },
    // Add more products as needed
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotalCost = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <strong>Name:</strong> {product.name}
            </div>
            <div>
              <strong>Price:</strong> ${product.price}
            </div>
            
            <button onClick={() => addToCart(product)}> Add to Cart </button>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>{cartItem.name}</li>
        ))}
      </ul>
      <div>
        <strong>Total Cost:</strong> ${calculateTotalCost()}
      </div>
    </div>
  );
};

export default ProductList;
