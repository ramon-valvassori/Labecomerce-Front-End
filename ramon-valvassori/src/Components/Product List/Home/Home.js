import Cart from "../../ShoppingCart/Cart/Cart";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer, ListContainer } from "./homeStyle";

import { useState } from "react";

const Home = (props) => {
  const { ProductList, amount, cart, quantia, carrinho } = props;

  const [ordination, setOrdination] = useState("");
  const [adicionarItens, setAdicionarItens] = useState("");

  const ordenacao = (e) => {
    setOrdination(e.target.value);
  };

  const adcionarItensFuncao = (e) => {
    setAdicionarItens(e.target.value);
  };

  const addToCart = (product) => {
    const newProduct = cart.find((item) => item.id === product.id);
    console.log(newProduct);
  };

  const renderList = ProductList.map((product) => {
   
    return (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    );
  });

  const productCart = cart.map((product) => {
    return (
      <Cart
        key={product.id}
        id={product.id}
        name={product.name}
        value={product.value}
        imageUrl={product.imageUrl}
      />
    );
  });

  return (
    <>
      <HomeContainer>{renderList}</HomeContainer>

      <Cart>{productCart}</Cart>
    </>
  );
};

export default Home;
