import React from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {


  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Cart />
    </div>
  );
}

export default App;
