import { ProductCardContainer} from "./productCardStyle"

const ProductCard = (props) => {
  

   const { renderList } = props
  
    
return (

    <ProductCardContainer>
    <div className="ProductCard">
        renderList={renderList}  
       
       
       
        
    </div>
    </ProductCardContainer>
)
}

export default ProductCard