import { useState } from "react"

const Filters = (
    minFilter,
    setMinFilter,
    maxFilter,
    setMaxFilter,
    searchFilter,
    setSearchFilter
    ) => {
     
     const minimoFiltro = (e) => {
        setMinFilter(e.target.value)
     }

     const maximoFiltro = (e) => {
        setMaxFilter(e.target.value)
     }

     const procuraFiltro = (e) => {
        setSearchFilter = (e.target.value)
     }
     
     
     return (
        <div>
            <imput onChange={minimoFiltro} valeu={minFilter}>
                <h1>Filtro Mínimo</h1>
                
            </imput>
            <imput onChange={maximoFiltro} valeu={maxFilter}>
                <h1>Filtro Máximo</h1>
                
            </imput>
            <imput onChange={procuraFiltro} valeu={searchFilter}>
                <h1>Procura Filtro</h1>
                
            </imput>
        </div>
    )
}

export default Filters