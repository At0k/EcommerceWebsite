// //CartContext.js
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 } // Increase quantity by 1
//             : item
//         );
//       } else {
//         return [...prevItems, { ...product, quantity: 1 }]; // Default quantity to 1
//       }
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return; // Prevent setting quantity to less than 1
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

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
