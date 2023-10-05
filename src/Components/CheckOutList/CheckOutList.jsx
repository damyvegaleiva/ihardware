import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ContactForm from "../Form/ContactForm";
import CheckOutItem from "../CheckOutItem/CheckOutItem";

const CheckOutList = ({ createOrder }) => {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h2 className="container-title">CheckOut</h2>

      <table className="checkout-list">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((prod) => (
            <CheckOutItem key={prod.id} {...prod} />
          ))}
        </tbody>
      </table>

      <h2>Total: ${total}</h2>

      <ContactForm placeOrder={createOrder} />
    </div>
  );
};

export default CheckOutList;
