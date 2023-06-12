import Cart from "../Cart/Cart"
const Items = (props) => {
    return(
        <div>    
      <h1></h1>
      <label>
            <h1></h1>
            <input type="range" min="0" max="1000000000" onChange={props.quantia()} value={props.amount} />
            <input type="range" min="0" max="1000000000" onChange={props.carrinho()} value={props.Cart} />
        </label>
        
      </div>
    )
}

export default Items