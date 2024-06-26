import React from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {


  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="flex justify-between w-full items-center font-semibold px-5 py-5">
        <h1>Home Component</h1>
      </div>
      <Cart />
    </div>
  );
}

export default App;
