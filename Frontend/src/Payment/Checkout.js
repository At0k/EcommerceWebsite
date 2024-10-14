import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleConfirmOrder = async () => {
    const orderDetails = {
      productList: cartItems,
      orderDate: new Date(), // Add any other order details you need
    };

    try {
      const response = await fetch('http://localhost:8082/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order = await response.json();
      console.log('Order created:', order);
      // Optionally navigate to an order confirmation page or clear the cart
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add items to cart before checking out.</p>
      ) : (
        <>
          <h4>Your Order:</h4>
          <ul>
            {cartItems.map((item) => (
              <li key={item.code}>
                {item.name} - RM{item.price.toFixed(2)} x {item.quantity}
              </li>
            ))}
          </ul>
          <button className="btn btn-success" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
