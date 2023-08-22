import { useEffect, useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isInCart = (id) => cart.some((product) => product.id === id);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const addQty = (id) => {
    setCart((prev) =>
      prev.map((prod) =>
        prod.id === id && prod.qty < prod.stock
          ? { ...prod, qty: prod.qty + 1 }
          : { ...prod }
      )
    );
  };

  const removeQty = (id) => {
    setCart((prev) =>
      prev.map((prod) =>
        prod.id === id && prod.qty > 1
          ? { ...prod, qty: prod.qty - 1 }
          : { ...prod }
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    let total = 0;

    cart.map((prod) => {
      total += prod.price * prod.qty;
    });

    return total.toFixed(2);
  };

  const total = getTotal();

  return {
    cart,
    addQty,
    removeQty,
    addItem,
    isInCart,
    clearCart,
    removeItem,
    total,
  };
};

export default useCart;
