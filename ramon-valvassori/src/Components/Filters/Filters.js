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
            <h1>Filters</h1>
            <input onChange={minimoFiltro} valeu={minFilter}/>
                <h2>Filtro Mínimo</h2>
                
            
            <input onChange={maximoFiltro} valeu={maxFilter}/>
                <h2>Filtro Máximo</h2>
                
            
            <input onChange={procuraFiltro} valeu={searchFilter}/>
                <h2>Procura Filtro</h2>
                
            
        </FilterContainer>
    )
}

export default Filters