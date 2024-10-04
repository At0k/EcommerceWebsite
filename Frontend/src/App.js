// App.js
import { Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";
import ProductDetail from "./products/detail/ProductDetail";
import ProductList from "./products/ProductList";
import Landing from "./landing/Landing";
import StaffPages from "./StaffPages";
import SignInSide from "./FrontEnd/login/SignInSide";


function App() {
  return (
    <>
    <Routes>
    <Route
        path="/sign-in"
        element={
            <SignInSide />
        }
      />
      <Route path="/products" element={<ProductList />}/>
        <Route path="/products/:slug" element={<ProductDetail />}/>
        <Route path="/" element={<Landing />}/>
    </Routes>
      <AdminPages />
      <StaffPages />
      </>
  );
}

export default App;
