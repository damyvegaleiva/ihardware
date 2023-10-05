const CheckOutItem = ({ name, qty, price, img }) => {
  return (
    <tr className="checkout-item">
      <th className="checkout-item__img">
        <img src={img} alt={name} />
      </th>

      <th className="checkout-item__name">
        <h2>{name}</h2>
      </th>

      <th className="checkout-item__qty">
        <h2>{qty}</h2>
      </th>

      <th className="checkout-item__price">
        <h2>$ {price}</h2>
      </th>
    </tr>
  );
};

export default CheckOutItem;
