// App.js
import { Routes, Route } from "react-router-dom";
import AdminPages from "./AdminPages";

import StaffPages from "./StaffPages";
import SignInSide from "./FrontEnd/login/SignInSide";
import FoodPhotos from "./FrontEnd/others/FoodPhotos";

function App() {
  return (
    <>
    <Routes>
    <Route
        path="/"
        element={
            <SignInSide />
        }
      />
    <Route
      path="/food-photos"
      element={ <FoodPhotos /> }
    />  
    </Routes>
      <AdminPages />
      <StaffPages />
      </>
  );
}

export default App;
