import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "../src/base/theme"; 
import Header from "./components/Header";
import AdminPages from "./AdminPages";
import ProductDetail from "./products/detail/ProductDetail";
import ProductList from "./products/ProductList";
import Landing from "./landing/Landing"; // Import Landing component
import StaffPages from "./StaffPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import SignUpSide from "./FrontEnd/signup/SignUpSide";
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
  );
}

export default App;