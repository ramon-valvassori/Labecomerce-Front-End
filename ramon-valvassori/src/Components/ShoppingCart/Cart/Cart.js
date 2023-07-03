import { CartContainer } from "./cartStyle"

const Cart = (props) => {

    const { quantia, carrinho, amount, cart } = props  

    return(
      
        <CartContainer>
        <label>
            <input type="number" onChange={quantia} value={amount} />
            <input type="cart" onChange={carrinho} value={cart} />
        </label>
        
        
        
        </CartContainer>

        
      
    )
}

export default Cart