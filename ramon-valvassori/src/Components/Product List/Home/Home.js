import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer} from "./homeStyle";


const Home = ({ProductList}) => {

  const [ordination, setOrdination] = useState("")
  const [cart, setCart] = useState([])
    
  const handleSelectChange = (e) => {
    setOrdination(e.target.value)
  }

  const addToCart = (product) => {
    const newProduct = cart.find((item) => item.id === product.id);
    console.log(newProduct);

    if (newProduct === undefined) {
      setCart([...cart, { ...product, amount: 1 }]);
    } else {

      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...newProduct, amount: newProduct.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart)
    }
  };

  const deleteProductCart = (product) => {
    const ProductToDelete = cart.find((item) => item.id === product.id )


    if (ProductToDelete.amount>1) {
      
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ... ProductToDelete, amount: ProductToDelete.amount-1 };
        } else {
          return item;
        }
      });
      setCart(newCart)
     
    } else {
      const newCart = cart.filter((item)=>{
        return item.id !== product.id
      })
      setCart(newCart)
    }
  }  


   
    return (<>
      <h3>Quantidade de produtos: 6</h3>
      <HomeContainer>
      <ProductCard
      ProductList={ProductList}
      addToCart={addToCart}
      deleteProductCart={deleteProductCart}
      />
      
      
      <select onChange={handleSelectChange} value={ordination}>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </select>
        </HomeContainer>
           </>
    );
};

export default Home;
