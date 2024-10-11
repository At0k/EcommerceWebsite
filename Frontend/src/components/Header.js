import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { ColorModeContext } from "../base/theme";
import { Brightness4, Brightness7, ShoppingCart } from "@mui/icons-material"; // Import ShoppingCart icon
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom"; // For routing to cart page

const Header = ({ title }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

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
          <Button color="inherit" sx={{ color: "black", ml: 2 }}>
            Profile
          </Button>

          {/* Theme Toggle Button */}
          <IconButton onClick={colorMode.toggleColorMode} color="inherit" sx={{ ml: 2 }}>
            {theme.palette.mode === "dark" ? (
              <Brightness7 sx={{ color: "black" }} />
            ) : (
              <Brightness4 sx={{ color: "black" }} />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
