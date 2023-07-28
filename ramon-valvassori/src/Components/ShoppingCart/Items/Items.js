import { CartContainer } from "./itemsStyle"


const Items = (props) => {
  const { quantia, carrinho, amount, cart } = props
    return <><p>Items</p>
      <CartContainer>
        <div>    
      <label>
            
            <input type="range" min="0" max="1000000000" onChange={quantia} value={amount} />
            <input type="range" min="0" max="1000000000" onChange={carrinho} value={cart} />
        </label>
        
      </div>
      </CartContainer>
      </>
    
}

export default Items