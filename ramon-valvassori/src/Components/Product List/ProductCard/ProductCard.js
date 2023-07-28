import { ProductCardContainer} from "./productCardStyle"

const ProductCard = (props) => {
 
   
return  ( <>

    <ProductCardContainer>
    <div>
    <img src={props.imageUrl} alt={`imagem de ${props.name}`}/>
    <p>{`Número ${props.id}`}</p>
    <h1>{props.name}</h1>
    <h2>{`R$ ${props.value}`}</h2>
    <button onClick={props.addItemToCart} value={props.cart} key={props.id}>Adicionar ao Carrinho</button>        
    </div>
    </ProductCardContainer>
    </>
)
}

export default ProductCard