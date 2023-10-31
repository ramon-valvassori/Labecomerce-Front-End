
import ProductCard from "../ProductCard/ProductCard";
import { HomeContainer} from "./homeStyle";


const Home = ({ProductList, addToCart, deleteProductCart, handleSelectChange, ordination}) => {

   
    return (<>
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
