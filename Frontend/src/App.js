import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMode, ColorModeContext } from "../src/base/theme"; // Adjust path if necessary
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
import CartProvider from './cart/CartContext'; // Ensure this path is correct
import Checkout from './Payment/Checkout'; 
import React from "react";

function App() {
  const [theme, colorMode] = useMode(); // Use the useMode hook

  return (
    <ColorModeContext.Provider value={colorMode}> {/* Provide color mode context */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider> {/* Wrap your app with CartProvider */}
          <Header title="Khairul Aming" />
          <div style={{ background: theme.palette.background.default, minHeight: '100vh', color: theme.palette.text.primary }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/sign-in" element={<SignInSide />} />
              <Route path="/sign-up" element={<SignUpSide />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/dashboard-admin" element={<AdminPages />} />
              <Route path="/dashboard-staff" element={<StaffPages />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/team-admin" element={<TeamAdmin />} />
              <Route path = "/sign-up" element ={<SignUpSide/>} />
              <Route path="/checkout" element={<Checkout />} />

        
            </Routes>
          </div>
        </CartProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

