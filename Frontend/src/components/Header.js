import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material"; // Import ShoppingCart icon
import { Link } from "react-router-dom"; // For routing to cart page
import { CartContext } from "../cart/CartContext"; // Adjust the import path

const Header = ({ title }) => {
  const { cartItems } = useContext(CartContext); // Access cart items
  const distinctProductCount = cartItems.length; // Count distinct products in the cart

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 3 }}>
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color="black" component="div" sx={{ mr: 2 }}>
              {title}
            </Typography>
          </Link>
          <Link to="/products">
            <Button color="inherit" sx={{ color: "black", ml: 2 }}>
              Products
            </Button>
          </Link>
        </Box>

        <Box display="flex" alignItems="center">
          <Link to="/cart">
            <IconButton sx={{ color: "black" }}>
              <ShoppingCart />
              {distinctProductCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  background: 'red',
                  borderRadius: '50%',
                  padding: '4px 8px',
                  color: 'white',
                  fontSize: '12px',
                }}>
                  {distinctProductCount}
                </span>
              )}
            </IconButton>
          </Link>
          <Button color="inherit" sx={{ color: "black", ml: 2 }}>
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
