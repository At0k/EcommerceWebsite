import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material"; // Import ShoppingCart icon
import { Link, useNavigate } from "react-router-dom"; // For routing to cart and other pages
import AuthService from '../Auth/AuthService'; // Assuming AuthService handles session management

const Header = ({ title }) => {
  const navigate = useNavigate(); // For programmatic navigation

  // Handle Logout
  const handleLogout = () => {
    AuthService.logout(); // Call logout function from AuthService
    alert("You've been signed out");
    navigate("/sign-in"); // Navigate to sign-in page after logout
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 3 }}>
      <Toolbar>
        <Box display="flex" flexGrow={1} alignItems="center">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color="black" component="div" sx={{ mr: 2 }}>
              My Store
            </Typography>
          </Link>

          {/* Products Button */}
          <Link to="/products">
            <Button color="inherit" sx={{ color: "black", ml: 2 }}>
              Products
            </Button>
          </Link>
        </Box>

        <Box display="flex" alignItems="center">
          {/* Cart Icon */}
          <Link to="/cart">
            <IconButton sx={{ color: "black" }}>
              <ShoppingCart />
            </IconButton>
          </Link>

          {/* Profile Button */}
          <Link to="/profile">
            <Button color="inherit" sx={{ color: "black", ml: 2 }}>
              Profile
            </Button>
          </Link>

          {/* Logout Button */}
          <Button color="inherit" sx={{ color: "black", ml: 2 }} onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
