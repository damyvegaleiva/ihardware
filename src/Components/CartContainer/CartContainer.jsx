import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const CartContainer = () => {
  const { total } = useContext(CartContext);

  return (
    <div className="cart__container">
      <h2 className="container-title">Your Cart</h2>

      <CartList />

      <h2>Your Total is: ${total}</h2>
      <Link to={"/checkout"}>CONTINUE TO CHECKOUT</Link>
    </div>
  );
};

export default CartContainer;
