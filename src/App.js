import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import AddProduct from "./pages/AddProduct";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route to='/' index element={<CartPage />} />
        <Route to='/add-product' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
