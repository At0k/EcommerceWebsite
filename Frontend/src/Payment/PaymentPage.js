import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PaymentPage() {
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "creditCard",
  });

  const [products] = useState([
    { id: 1, name: "Nillkin iPhone X cover", price: 10000, quantity: 1 },
    { id: 2, name: "Remax USB Cable", price: 5000, quantity: 2 },
  ]);

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate payment process
    console.log("Payment details:", billingInfo);
    setPaymentSuccess(true);
  };

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />

      <h2 className="mb-4">Checkout</h2>

      <div className="row">
        {/* Left Section - Billing Information */}
        <div className="col-lg-6">
          {!paymentSuccess ? (
            <form onSubmit={handlePaymentSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={billingInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={billingInfo.address}
                  onChange={handleInputChange}
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
                    value={billingInfo.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label">Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="postalCode"
                    value={billingInfo.postalCode}
                    onChange={handleInputChange}
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
                  value={billingInfo.country}
                  onChange={handleInputChange}
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
        <div className="col-lg-6">
          <div className="border p-4 rounded shadow-sm">
            <h5 className="mb-3">Order Summary</h5>
            {products.map((product, i) => (
              <div key={i} className="d-flex justify-content-between mb-2">
                <span>
                  {product.name} x {product.quantity}
                </span>
                <span>{product.price * product.quantity} Ks</span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between mb-3">
              <span>Total Price:</span>
              <strong>{totalPrice} Ks</strong>
            </div>

            <Link to="/products" className="btn btn-outline-dark w-100 mb-2">
              <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} /> Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
