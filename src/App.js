import React from "react";
import images from "./assets/images/images";
import CartContainer from "./containers/CartContainer";
function App() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between w-full items-center font-semibold px-5 py-5">
        <h1>Home Component</h1>
        <img src={images.cart} alt="cart" className="h-8 w-8" />
      </div>
      <CartContainer />
    </div>
  );
}

export default App;
