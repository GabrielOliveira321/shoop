import React from "react";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Provider from "./Context/Provider";

function App() {
  return (
    <Provider>
      <Header />
      <Products/>
      <Cart/>
    </Provider>
  );
}

export default App;
