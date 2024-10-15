import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { useMode, ColorModeContext } from "../src/base/theme"; 
import Header from "./components/Header"; 

import AdminPages from "./AdminPages";
import ProductDetail from "./products/detail/ProductDetail";
import ProductList from "./products/ProductList";
import Landing from "./landing/Landing"; 
import StaffPages from "./StaffPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import SignUpSide from "./FrontEnd/signup/SignUpSide";
import PaymentPage from "./Payment/PaymentPage";  
import SuccessPage from "./Payment/SuccessPage";  
import Profile from "./Profile/Profile";          
import Cart from "./cart/Cart";
import TeamAdmin from "./HodViews/scense/team/index";
import { CartProvider } from './cart/CartContext';
import Checkout from './Payment/Checkout';
import React from "react";

function App() {
  const [theme, colorMode] = useMode(); 
  const location = useLocation(); // Get the current route location

  // Define the routes where the header should not be displayed, including the staff dashboard
  const noHeaderRoutes = ["/sign-in", "/sign-up", "/forgot-password", "/dashboard-staff"];

  // Check if the current route is in the noHeaderRoutes list
  // const shouldShowHeader = !noHeaderRoutes.some(route => location.pathname.startsWith(route));
  const shouldShowHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>
          {/* Conditionally render the header */}
          {shouldShowHeader && <Header title="Khairul Aming" />}

          <div style={{ background: theme.palette.background.default, minHeight: '100vh', color: theme.palette.text.primary }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/sign-in" element={<SignInSide />} />
              <Route path="/sign-up" element={<SignUpSide />} />
              <Route path="/forgot-password" element={<div>Forgot Password Page</div>} /> {/* Example forgot password route */}
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/dashboard-admin" element={<AdminPages />} />
              <Route path="/dashboard-staff/*" element={<StaffPages />} /> {/* Staff pages */}
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/team-admin" element={<TeamAdmin />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </CartProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;