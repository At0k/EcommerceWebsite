// //Cart.js
// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
// import { useTheme } from '@mui/material/styles'; // Import useTheme for theme access

// function Cart() {
//   const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
//   const theme = useTheme(); // Get the current theme

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   const handleQuantityChange = (id, newQuantity) => {
//     if (newQuantity < 1) return; // Prevent setting quantity to less than 1
//     updateQuantity(id, newQuantity); // Update the quantity
//   };

//   return (
//     <div className="container mt-5" style={{ color: theme.palette.text.primary }}>
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Unit Price</th>
//                 <th>Quantity</th>
//                 <th>Subtotal</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item) => (
//                 <tr key={item.id}> {/* Use item.id for unique key */}
//                   <td>
//                     <img src={item.image} alt={item.name} width="50" height="50" /> {item.name}
//                   </td>
//                   <td>RM{item.price.toFixed(2)}</td>
//                   <td>
//                     {/* Input to update quantity */}
//                     <input
//                       type="number"
//                       value={item.quantity}
//                       min="1"
//                       onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} // Use item.id
//                       style={{ width: '60px' }}
//                     />
//                   </td>
//                   <td>RM{(item.price * item.quantity).toFixed(2)}</td> {/* Subtotal = price * quantity */}
//                   <td>
//                     <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="text-end">
//             <h4>Total: RM{calculateTotal()}</h4> {/* Calculate and display total */}
//             <button className="btn btn-success">Proceed to Checkout</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { CartProvider } from './CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Navigate to the checkout page
    navigate('/checkout');
  };

  const handleQuantityChange = (code, quantity) => {
    updateQuantity(code, quantity);
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.code}>
                  <td>
                    <img src={item.image} alt={item.name} width="50" height="50" /> {item.name}
                  </td>
                  <td>RM{item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(item.code, parseInt(e.target.value))}
                      style={{ width: '60px' }}
                    />
                  </td>
                  <td>RM{(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.code)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end">
            <h4>Total: RM{calculateTotal()}</h4>
            <button className="btn btn-success" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;


