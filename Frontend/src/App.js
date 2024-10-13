import { Routes, Route, useLocation } from "react-router-dom";
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
import CartProvider from './cart/CartContext'; // Ensure this path is correct

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
            </Routes>
          </div>
        </CartProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>

import PaymentPage from "./Payment/PaymentPage";  // Import the PaymentPage component
import SuccessPage from "./Payment/SuccessPage";  // Import the SuccessPage component
import Profile from "./Profile/Profile";          // Import the Profile page component
import Cart from "./cart/Cart"; // Assuming you've created Cart.js
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation();

  // Don't show the header on these routes
  const hideHeaderRoutes = ["/sign-in", "/sign-up"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Reset default browser styles */}

          {/* Conditionally render the Header based on the route */}
          {shouldShowHeader && <Header title="My Store" />}

          <Routes>
            {/* Set Landing.js as the default route */}
            <Route path="/" element={<Landing />} />

    <><>
    </><ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Reset default browser styles */}
          <Header title="My Store" />
          <Routes>
            {/* Set Landing.js as the default route */}
            <Route path="/Landing" element={<Landing />} />
            <Route path="/sign-in" element={<SignInSide />} />
            <Route path="/sign-up" element={<SignUpSide />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/dashboard-admin" element={<AdminPages />} />
            <Route path="/dashboard-staff" element={<StaffPages />} />
            <Route path="/payment" element={<PaymentPage />} />   {/* Payment Page Route */}
            <Route path="/success" element={<SuccessPage />} />   {/* Success Page Route */}
            <Route path="/profile" element={<Profile />} />       {/* User Profile Page */}
            <Route path="/cart" element={<Cart />} />             {/* Cart page route */}
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>

            <Route path="/cart" element={<Cart />} /> {/* Cart page route */}
            
            {/* New Payment and Success routes */}
            <Route path="/payment" element={<PaymentPage />} />   {/* Payment Page Route */}
            <Route path="/success" element={<SuccessPage />} />   {/* Success Page Route */}

            {/* New Profile route */}
            <Route path="/profile" element={<Profile />} />       {/* User Profile Page */}
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider></>
  );
}

export default App;