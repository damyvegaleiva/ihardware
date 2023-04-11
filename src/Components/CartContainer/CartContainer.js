import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const CartContainer = () => {

    const { cart, removeItem, total } = useContext(CartContext)

    return (
        <div>
            <h1>Your Cart</h1>
            <div>
                {cart.map(prod => <CartItem key={prod.id}{...prod} handleRemove={removeItem} />)}
            </div>
            <h2>Your Total is: ${total}</h2>
            <Link to={'/checkout'}>CONTINUE TO CHECKOUT</Link>
        </div>
    );
}

export default CartContainer;