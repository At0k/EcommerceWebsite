import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const Cart = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      
      {/* Add your cart items and other content here */}
      <Typography variant="body1" gutterBottom>
        Your cart is currently empty.
      </Typography>

      {/* Button to go back to home page */}
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ mt: 2 }} // Optional: margin-top to space out
      >
        Back to Home - Continue Shopping
      </Button>
    </Container>
  );
};

export default Cart;
