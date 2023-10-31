import React from "react";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/Product List/Home/Home";

import { GlobalStyle } from "./GlobalStyle";
import ProductList from "./Components/assents/ProductList";


function App({ addToCart, deleteProductCard, handleSelectChange, ordination}) {

  return (
    <div>
      <GlobalStyle />
      <Filters
        ProductList={ProductList}
      />
      <Home
        ProductList={ProductList}
        addToCart={addToCart}
        deleteProductCard={deleteProductCard}
        handleSelctChange={handleSelectChange}
        ordination={ordination}
      />
    </div>
  );
}

export default App;
