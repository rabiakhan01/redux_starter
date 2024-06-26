import React from "react";
import CartContainer from "./containers/CartContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App() {


  return (
    <div className="flex flex-col gap-5">
      <HeaderContainer />
      <div className="flex justify-between w-full items-center font-semibold px-5 py-5">
        <h1>Home Component</h1>
      </div>
      <CartContainer />
    </div>
  );
}

export default App;
