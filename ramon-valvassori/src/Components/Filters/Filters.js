import { useState } from "react"
import { FilterContainer } from "./FiltersStyle"

const Filters = ({ProductList}) => {

  
const [ordem, setOrdem] = useState("crescente")

const handleChangeOrdem = (event) => {
   setOrdem(event.target.value)
}

const itensOrdenados = ProductList.sort((a, b) => a - b);
console.log(itensOrdenados);

   return (
      <FilterContainer>
         <label htmlFor="ordem">Ordem</label>
         <select id="ordem" onChange={handleChangeOrdem} value={ordem}>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
         </select>
        <ul>
         {itensOrdenados.map((item, index) => (
            <li key={index}>{item}</li>
         ))}
        </ul>
      </FilterContainer>
   )
}

export default Filters