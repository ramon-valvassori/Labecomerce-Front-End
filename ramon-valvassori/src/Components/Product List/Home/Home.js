import ProductCard from "../ProductCard/ProductCard"
import  { HomeContainer, ListContainer }  from "./homeStyle"

import { useState } from 'react'


const Home = (props) => {

    const {ProductList, amount, cart, quantia, carrinho} = props

    const [ordination, setOrdination] = useState("")
    const [adicionarItens, setAdicionarItens] = useState("")

    const ordenacao = (e) => {
        setOrdination(e.target.value)
    }

    const adcionarItensFuncao = (e) => {
        setAdicionarItens(e.target.value)
    } 
    
    
    const renderList = ProductList.map(char => {
    
        return (
               
        <ListContainer> 
        <ProductCard key={char.id}
        id = {char.id}
        name = {char.name}
        value = {char.value}
        imageUrl = {char.imageUrl}/>
        </ListContainer>
        
        )
      })
           
        return(
        <HomeContainer>

                    {/*<select onChange={ordenacao} value={ordination}>
                    </select>*/}
                    
                    {renderList}
                    
                    
                    {/*<input type="number" onChange={quantia} value={amount} />
                    <input type="cart" onChange={carrinho} value={cart} />
                <button onChange={adcionarItensFuncao} value={adicionarItens}></button>*/}
                    
            </HomeContainer>
        
            
        

        )
    }

export default Home

