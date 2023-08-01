import { ProductCardContainer } from "./productCardStyle";

const ProductCard = ({ addToCart, product}) => {
  console.log(product);
  return (
    
      <ProductCardContainer>
        
          {/*<img src={product.imageUrl} alt={`imagem de ${product.name}`} />*/}
          <p>{`Número ${product.id}`}</p>
          <h1>{product.name}</h1>
          <h2>{`R$ ${product.value}`}</h2>
          <button
            onClick={()=>addToCart(product)}>
            Adicionar ao Carrinho
          </button>
        
      </ProductCardContainer>
    
  );
};

export default ProductCard;
