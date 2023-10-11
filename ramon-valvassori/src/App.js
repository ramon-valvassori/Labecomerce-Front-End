import React from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/Product List/Home/Home";

import { GlobalStyle } from "./GlobalStyle";
import ProductList from "./Components/assents/ProductList";
import Cart from "./Components/ShoppingCart/Cart/Cart";

function App(props) {
  const { addToCart, deleteProdutcCart } = props;
  console.log(props)

  

  return (
    <div>
      <GlobalStyle />
      <Filters />
   <Home
   ProductList={ProductList}
        /* addToCart={addToCart}
        deleteProdutcCart={deleteProdutcCart} */
      />
     {/* <Cart/>  */}
    </div>
  );
}

export default App;
