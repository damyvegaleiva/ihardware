import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const total = getTotal();

  function getTotal() {
    let total = 0;

    cart.forEach((prod) => {
      total += prod.price * prod.qty;
    });
    return total;
  }

  const isInCart = (id) => cart.some((product) => product.id === id);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) setCart((prev) => [...prev, productToAdd]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const add = (id) => {
    setCart((prev) =>
      prev.map((prod) =>
        prod.id === id
          ? {
              ...prod,
              qty: prod.qty < prod.stock ? prod.qty++ : prod.qty,
            }
          : { ...prod }
      )
    );
  };

  const subs = (id) => {
    setCart((prev) =>
      prev.map((prod) =>
        prod.id === id
          ? {
              ...prod,
              qty: prod.qty > 1 ? prod.qty-- : prod.qty,
            }
          : { ...prod }
      )
    );
  };

  return {
    cart,
    add,
    subs,
    addItem,
    isInCart,
    clearCart,
    removeItem,
    total,
  };
};

export default useCart;
