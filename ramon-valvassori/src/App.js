import React from 'react';
import './App.css';
import { useState } from 'react'
import Filters from './Components/Filters/Filters';
import Home from './Components/Product List/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Items from './Components/ShoppingCart/Items/Items';
import ProductCard from './Components/Product List/ProductCard/ProductCard';
import ProductList from './Components/assents/ProductList'
import { GlobalStyle } from './GlobalStyle';

function App() {
  
  const [minFilter, setMinFilter] = useState("") 
  const [maxFilter, setMaxFilter] = useState("")
  const [cart, setCart] = useState("")
  const [searchFilter, setSearchFilter] = useState("")
  const [amount, setAmount] = useState("")

  const quantia = (e) => {
    setAmount(e.target.value)
}

  const carrinho = (e) => {
    setCart(e.target.value)
}

  const renderList = ProductList.map(char => {
    return (
      <ProductCard key={char.id}
    id = {char.id}
    name = {char.name}
    value = {char.value}
    imageUrl = {char.imageUrl}
    />
    )
  })

  return (
    <div className="App">
      <GlobalStyle/>
      <Filters
      minFilter={minFilter}
      setMinFilter={setMinFilter}
      maxFilter={maxFilter}
      setMaxFilter={setMaxFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}/>
      <Home
      renderList={renderList}
      amount={amount}
      
      cart={cart}
      
      carrinho={carrinho}
      quantia={quantia}/>
      
      <Cart
      carrinho={carrinho}
      quantia={quantia}
      amount={amount}
      cart={cart}
      />

      <Items 
      quantia={quantia}
      carrinho={carrinho}/>

      <ProductCard/>
      
    </div>
    
  );
  }

export default App;
