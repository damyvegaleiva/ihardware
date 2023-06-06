import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import AfterAddToCartOptions from "../AfterAddToCartOptions/AfterAddToCartOptions";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ name, price, stock, img, id }) => {
  const { addItem, isInCart } = useContext(CartContext);

  const handleOnAdd = (qty) => {
    addItem({ name, price, id, qty, img })
  }


  return (
    <article className="item-detail-container__item">
      <h2>{name}</h2>
      <img src={img} alt={name} width={350} />
      <h3>Precio: ${price}</h3>
      <h2>Stock available: {stock}</h2>
      {isInCart(id) ? <AfterAddToCartOptions />
        : <ItemCount stock={stock} handleOnAdd={handleOnAdd} />}
    </article>
  );
}

export default ItemDetail;