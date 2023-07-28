import { FilterContainer } from "./FiltersStyle"

const Filters = (props) => {
   const { minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter} = props
    
     
     const minimoFiltro = (e) => {
        setMinFilter(e.target.value)
     }

     const maximoFiltro = (e) => {
        setMaxFilter(e.target.value)
     }

     const procuraFiltro = (e) => {
        setSearchFilter(e.target.value)
     }
     
     
     return (
        <FilterContainer>
            <div>
            <h1>Filters</h1>
            <h2>Filtro Mínimo</h2>
            <input onChange={minimoFiltro} value={minFilter}/>
                
                
            <h2>Filtro Máximo</h2>
            <input onChange={maximoFiltro} value={maxFilter}/>
                
                
            <h2>Procura Filtro</h2>
            <input onChange={procuraFiltro} value={searchFilter}/>
                
            </div>     
            
        </FilterContainer>
    )
}

export default Filters