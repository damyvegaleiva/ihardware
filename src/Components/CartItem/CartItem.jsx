const CartItem = ({ name, qty, price, handleRemove, id, img }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={name} style={{ width: "5%" }} />
      <h1>{name}</h1>
      <h2>{qty}</h2>
      <h3>${price}</h3>
      <button onClick={() => handleRemove(id)}>🗑️</button>
    </div>
  );
};

export default CartItem;
