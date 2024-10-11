import React from "react";

function SuccessPage() {
  return (
    <div className="container mt-5 text-center">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your payment has been successfully processed.</p>
      <button className="btn btn-primary mt-3" onClick={() => window.location.href = "/"}>
        Go to Home
      </button>
    </div>
  );
}

export default SuccessPage;
