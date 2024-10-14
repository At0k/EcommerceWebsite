import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from '../Auth/AuthService'; 
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState(""); 
  const [billingInfo, setBillingInfo] = useState("");
  const [orderData, setOrderData] = useState([]); // State to hold order data
  const [totalPrice, setTotalPrice] = useState(0); // State for total price
  const navigate = useNavigate();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const success = await AuthService.billing(name, address, city, postalCode, country);
      
      if (success) {
        alert("Payment Success");
        setPaymentSuccess(true); // Set payment success to true
        
        // Fetch new order data here or update the orderData state as needed
        const newOrder = {
          orderId: Math.random().toString(36).substr(2, 9), // Replace with your order ID logic
          totalAmount: 100.00 // Replace with your calculated amount
        };
        
        // Update order data with the new order
        setOrderData(prevOrders => [...prevOrders, newOrder]);
        
        // Reset total price if needed
        setTotalPrice(prevTotal => prevTotal + newOrder.totalAmount);
        
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during payment.");
    }
  };

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />

      <h2 className="mb-4">Checkout</h2>

      <div className="row">
        {/* Left Section - Billing Information */}
        <div className="col-lg-6">
          {!paymentSuccess ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label">Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Payment Method</label>
                <select
                  className="form-select"
                  name="paymentMethod"
                  value={billingInfo.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Complete Payment
              </button>
            </form>
          ) : (
            <div>
              <h3>Payment Successful!</h3>
              <Link to="/order-history" className="btn btn-primary w-100 mt-3">
                View Order
              </Link>
            </div>
          )}
        </div>

        {/* Right Section - Order Summary */}
        {/* <div className="col-lg-6">
          <div className="border p-4 rounded shadow-sm">
            <h5 className="mb-3">Order Summary</h5>
            {orderData.length > 0 ? (
              orderData.map((order, i) => (
                <div key={i} className="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
                  <span>
                    Order ID: {order.orderId}
                  </span>
                  <span>Total Amount: RM{order.totalAmount.toFixed(2)}</span>
                </div>
              ))
            ) : (
              <p>No orders yet. Please complete your payment.</p>
            )}
            <div className="d-flex justify-content-between mt-3">
              <span><strong>Total Price:</strong></span>
              <strong>RM{totalPrice.toFixed(2)}</strong>
            </div>
            <Link to="/products" className="btn btn-outline-dark w-100 mb-2">
              <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} /> Back to Cart
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
