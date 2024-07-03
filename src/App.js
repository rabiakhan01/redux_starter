import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import AddProduct from "./pages/AddProduct";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<CartPage />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
