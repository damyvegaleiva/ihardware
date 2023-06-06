import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ContactForm from "../Form/ContactForm";

const CheckOutList = ({ createOrder }) => {
  const { cart, total } = useContext(CartContext);

  return (
    <div>
      <h1>CheckOut</h1>
      {cart.map((prod) => (
        <div key={prod.id}>
          {prod.qty}
          <img src={prod.img} style={{ width: "5%" }} alt={prod.name} />{" "}
          {prod.name} ${prod.price}
        </div>
      ))}
      <h2>Total: ${total}</h2>
      <ContactForm placeOrder={createOrder} />
    </div>
  );
};

export default CheckOutList;
