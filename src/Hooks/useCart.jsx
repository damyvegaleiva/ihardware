import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((product) => product.id === id);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => {
        return [...prev, productToAdd];
      });
    } else {
      console.log("NADA");
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const getTotal = () => {
    let total = 0;

    cart.forEach((prod) => {
      total += prod.price * prod.qty;
    });
    return total;
  };

  const total = getTotal();

  return {
    cart,
    addItem,
    isInCart,
    clearCart,
    removeItem,
    total,
  };
};

export default useCart;
