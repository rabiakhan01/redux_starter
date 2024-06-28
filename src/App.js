import React from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import InformationForm from "./components/InformationForm";

function App() {


  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Cart />
      <InformationForm />
    </div>
  );
}

export default App;
