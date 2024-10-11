// App.js
import { Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import ProductDetail from "./products/detail/ProductDetail";
import ProductList from "./products/ProductList";
import Landing from "./landing/Landing";
import StaffPages from "./StaffPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import SignUpSide from "./FrontEnd/signup/SignUpSide";
import PaymentPage from "./Payment/PaymentPage";  // Import the PaymentPage component
import SuccessPage from "./Payment/SuccessPage";  // Import the SuccessPage component
import Profile from "./Profile/Profile";          // Import the Profile page component

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-in" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUpSide />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/dashboard-admin" element={<AdminPages />} />
        <Route path="/dashboard-staff" element={<StaffPages />} />
        
        {/* New Payment and Success routes */}
        <Route path="/payment" element={<PaymentPage />} />   {/* Payment Page Route */}
        <Route path="/success" element={<SuccessPage />} />   {/* Success Page Route */}

        {/* New Profile route */}
        <Route path="/profile" element={<Profile />} />       {/* User Profile Page */}
      </Routes>
      <AdminPages />
      <StaffPages />
    </>
  );
}

export default App;
