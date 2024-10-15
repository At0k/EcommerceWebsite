import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";

function OrderHistoryPage() {
  // Sample data for orders (you might replace this with fetched data from an API)

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <h2 className="mb-4">Order History</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="border rounded p-3 mb-3">
            <h5>Order ID: {order.id}</h5>
            <p>Date: {order.date}</p>
            <div className="mb-2">
              {order.products.map((product, index) => (
                <div key={index} className="d-flex justify-content-between">
                  <span>
                    {product.name} x {product.quantity}
                  </span>
                  <span>{product.price * product.quantity} Ks</span>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-between">
              <strong>Total Price:</strong>
              <strong>{order.totalPrice} Ks</strong>
            </div>
          </div>
        ))
      )}

      <Link to="/products" className="btn btn-outline-dark">
        Back to Products
      </Link>
    </div>
  );
}

export default OrderHistoryPage;
