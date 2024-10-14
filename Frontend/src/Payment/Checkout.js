import React, { useContext } from 'react';
import { CartContext } from '../cart/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext); // Make sure clearCart is being accessed
  const navigate = useNavigate();

  const handleConfirmOrder = async () => {
    console.log('Order button clicked');

    const orderDetails = {
      orderId: Math.floor(Math.random() * 10000), // Generate a random order ID
      productList: cartItems.map(item => ({
        code: item.code,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      orderDate: new Date().toISOString().split('T')[0],
    };

    try {
      const response = await fetch('http://localhost:8082/api/Order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(`Failed to create order: ${errorResponse}`);
      }

      const order = await response.json();
      console.log('Order created:', order);

      console.log('Navigating to payment page...');
      navigate('/payment');
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
