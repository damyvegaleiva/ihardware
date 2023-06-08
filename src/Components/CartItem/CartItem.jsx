const CartItem = ({ name, qty, price, handleRemove, id, img, add, subs }) => {
  return (
    <tr className="cart-item">
      <th className="cart-item__img">
        <img src={img} alt={name} />
      </th>
      <th className="cart-item__name">
        <h2>{name}</h2>
      </th>
      <th>
        <div className="cart-item__options">
          <button onClick={() => subs(id)}>-</button>
          <h2>{qty}</h2>
          <button onClick={() => add(id)}>+</button>
        </div>
      </th>

      <th>
        <h2>${price}</h2>
      </th>
      <th>
        <button onClick={() => handleRemove(id)}>🗑️</button>
      </th>
    </tr>
  );
};

export default CartItem;
