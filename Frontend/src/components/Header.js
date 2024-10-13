

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
import { Link } from "react-router-dom"; // For routing to cart page

const Header = ({ title }) => {
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
