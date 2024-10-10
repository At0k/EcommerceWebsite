// App.js
import { Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import ProductDetail from "./products/detail/ProductDetail";
import ProductList from "./products/ProductList";
import Landing from "./landing/Landing";
import StaffPages from "./StaffPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import SignUpSide from "./FrontEnd/signup/SignUpSide";


function App() {
  return (
    <>
    <Routes>
      <Route path="/sign-in" element={<SignInSide />} />
      <Route path = "/sign-up" element ={<SignUpSide/>} />
      <Route path="/products" element={<ProductList />}/>
      <Route path="/products/:slug" element={<ProductDetail />}/>
      <Route path="/dashboard-admin" element={<AdminPages />} />
      <Route path="/dashboard-staff" element={<StaffPages />}/>
    </Routes>
      <AdminPages />
      <StaffPages />
      </>
  );
}

export default App;
