
import { ProductCardContainer } from "./productCardStyle";

const ProductCard = ({ addToCart, ProductList, deleteProductCard }) => {
  console.log(ProductList)

  const renderList = ProductList.map((product) => {
    return (
      <ProductCardContainer>
        
      <div key={product.id}>
         <img src={product.imageUrl} alt={`imagem de ${product.name}`} />
          <p>{`Número ${product.id}`}</p>
          <h1>{product.name}</h1>
          <h2>{`R$ ${product.value}`}</h2>
          <button onClick={() => addToCart()}>Adicionar ao Carrinho</button>
          <button onClick={() => deleteProductCard()}>X</button>
          
      </div>
      </ProductCardContainer>
    );
  });

  return (
    <>
      
      {renderList}
        
    </>
  );
};

export default ProductCard;
