import { useState } from "react";
import App from "../../../App";
import { CartContainer } from "./cartStyle";


const Cart = () => {

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
        const ProductToDelete = cart.find((item) => item.id === product.id)


        if (ProductToDelete.amount > 1) {

            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...ProductToDelete, amount: ProductToDelete.amount - 1 };
                } else {
                    return item;
                }
            });
            setCart(newCart)

        } else {
            const newCart = cart.filter((item) => {
                return item.id !== product.id
            })
            setCart(newCart)
        }
    }

    return (<>
        <CartContainer>
            <App
                addToCart={addToCart}
                deleteProductCart={deleteProductCart}
                handleSelectChange={handleSelectChange}
                ordination={ordination}
            />

        </CartContainer>
    </>
    );
};

export default Cart