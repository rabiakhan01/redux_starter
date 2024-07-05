import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import AddProduct from "./pages/AddProduct";
import ErrorPage from "./components/404";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<CartPage />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/update-product/:id' element={<AddProduct />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
