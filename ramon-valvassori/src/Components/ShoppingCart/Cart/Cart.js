import Items from "../Items/Items"

const Cart = (props) => {

    const quantia = (e) => {
        props.setAmount(e.target.value)
    }

    const carrinho = (e) => {
        props.setCart(e.target.value)
    }

    return(
      
      <>
      <label>
            <h1></h1>
            <input type="number" onChange={quantia} value={props.amount} />
            <input type="cart" onChange={carrinho} value={props.Cart} />
        </label>
        
        <div>
        <Items
        quantia={quantia}
        amount={props.amount}/>
        </div>
        </>
      
    )
}

export default Cart