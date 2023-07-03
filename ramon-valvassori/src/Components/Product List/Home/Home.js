import  { HomeContainer }  from "./homeStyle"

import { useState } from 'react'


const Home = (props) => {

    const {renderList, amount, cart, quantia, carrinho} = props

    const [ordination, setOrdination] = useState("")
    const [adicionarItens, setAdicionarItens] = useState("")

    const ordenacao = (e) => {
        setOrdination(e.target.value)
    }

    const adcionarItensFuncao = (e) => {
        setAdicionarItens(e.target.value)
    } 
       
        return(
       <HomeContainer> 
       <label>
       <select onChange={ordenacao} value={ordination}>       
       </select>
       {renderList}
       <input type="number" onChange={quantia} value={amount}/>
       <input type="cart" onChange={carrinho} value={cart}/>    
       <button onChange={adcionarItensFuncao} value={adicionarItens}></button>     
       </label>
       </HomeContainer>    
      

        )
    }

export default Home

