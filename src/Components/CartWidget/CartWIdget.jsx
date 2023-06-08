import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="cart-widget__container" onClick={() => navigate("/cart")}>
      <span>
        {" "}
        <FiShoppingCart />{" "}
      </span>
      <span>{cart.length}</span>
    </div>
  );
};

export default CartWidget;
