const CheckOutItem = ({ name, qty, price, img }) => {
  return (
    <tr className="cart-item">
      <th className="cart-item__img">
        <img src={img} alt={name} />
      </th>
      <th className="cart-item__name">
        <h1>{name}</h1>
      </th>
      <th>
        <h2>{qty}</h2>
      </th>
      <th>
        <h3>${price}</h3>
      </th>
    </tr>
  );
};

export default CheckOutItem;
