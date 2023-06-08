import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";

const CartList = () => {
  const { cart, removeItem, add, subs } = useContext(CartContext);

  return (
    <table className="cart-container__list">
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>X</th>
        </tr>
      </thead>

      <tbody>
        {cart.map((prod) => (
          <CartItem
            key={prod.id}
            {...prod}
            handleRemove={removeItem}
            add={add}
            subs={subs}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartList;
