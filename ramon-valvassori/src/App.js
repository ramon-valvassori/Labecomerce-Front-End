import React from 'react';

import { useState } from 'react'
import Filters from './Components/Filters/Filters';
import Home from './Components/Product List/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import ProductList from './Components/assents/ProductList'
import { GlobalStyle } from './GlobalStyle';
import ProductCard from './Components/Product List/ProductCard/ProductCard';

function App() {
  
  
  const [minFilter, setMinFilter] = useState("") 
  const [maxFilter, setMaxFilter] = useState("")
  const [cart, setCart] = useState([])
  const [searchFilter, setSearchFilter] = useState("")
  const [amount, setAmount] = useState("")

  const quantia = (e) => {
    setAmount(e.target.value)
}

  const carrinho = (e) => {
    setCart(e.target.value)
}

   
  return (
    <div className="App">
      <GlobalStyle/>
      <Filters
      minFilter={minFilter}
      setMinFilter={setMinFilter}
      maxFilter={maxFilter}
      setMaxFilter={setMaxFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}
      />
      <Home
      ProductList={ProductList}
      amount={amount}
      cart={cart}
      carrinho={carrinho}
      quantia={quantia} 
      />
      
      <Cart
      carrinho={carrinho}
      quantia={quantia}
      amount={amount}
      cart={cart}
      setCart={setCart}
      />

      <ProductCard
      cart={cart}
      carrinho={carrinho}
      />

      
      
    </div>
    
  );
  }

export default App;
