import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Filters from './Components/Filters/Filters';
import Home from './Components/Product List/Home/Home';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Items from './Components/ShoppingCart/Items/Items';
import ProductCard from './Components/Product List/ProductCard/ProductCard';
import ProductList from './Components/assents/ProductList';

function App() {
  
  
  const [minFilter, setMinFilter] = useState() 
  const [maxFilter, setMaxFilter] = useState()
  const [cart, setCart] = useState()
  const [searchFilter, setSearchFilter] = useState()
  const [amount, setAmount] = useState()
  return (
    <div className="App">
      <Filters
      minFilter={minFilter}
      setMinFilter={setMinFilter}
      maxFilter={maxFilter}
      setMaxFilter={setMaxFilter}
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}/>
      <Home
      productList={ProductList}
      amount={amount}
      setAmount={setAmount}
      cart={cart}
      setCart={setCart}/>
      <Cart
      amount={amount}
      setAmount={setAmount}
      cart={cart}
      setCart={setCart}/>
      <ProductCard productList={ProductList}/>
      <Items/>
      <ProductList/>
    </div>
    
  );
}

export default App;
