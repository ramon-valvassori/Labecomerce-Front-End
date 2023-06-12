import { HomeStyle } from "./homeStyle";
import ProductCard from "../../assents/ProductList"
import { useState } from 'react'
import ProductList from "../../assents/ProductList";

const Home = (props) => {
    const [ordination, setOrdination] = useState("")

    const ordenacao = (e) => {
        setOrdination(e.target.value)
    }
    
    const quantia = (e) => {
        props.setAmount(e.target.value)
    }

    const carrinho = (e) => {
        props.setCart(e.target.value)
    }
       
        return(
      <label>     
      <h1></h1>
       <select onChange={ordenacao} value={ordination}>       
       </select>
       <input type="list" value={ProductList}/>
       <input type="number" onChange ={quantia} value={props.amount}/>
       <input type="cart" onChange={carrinho} value={props.Cart}/>    
      </label> 
        
        )
    }

export default Home

