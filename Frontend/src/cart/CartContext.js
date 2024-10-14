

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.code === product.code);
      if (existingItem) {
        return prevItems.map(item => 
          item.code === product.code 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (code) => {
    setCartItems(prevItems => prevItems.filter(item => item.code !== code));
  };

  const clearCart = () => {
    setCartItems([]); // Reset cartItems to an empty array
  };
  
  const updateQuantity = (code, quantity) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.code === code ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
