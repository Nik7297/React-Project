import React from 'react'
import { useState } from 'react';

function About() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Item 1', price: 10, quantity: 1 },
        { id: 2, name: 'Item 2', price: 20, quantity: 1 },
        { id: 3, name: 'Item 3', price: 30, quantity: 1 },
      ]);
    //   const [valueaaye,parseInt] =useState([])

   
// console.log(valueaaye)


function updateCartItemQuantity(id, quantity ) {
    setCartItems((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  }

  function calculateTotalPrice() {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
  

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateCartItemQuantity(item.id, parseInt(e.target.value))
              }
            />
          </li>
        ))}
      </ul>
      <p>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
  
}

export default About