import { createContext } from "react";
import useCart from "../Hooks/useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const {
    cart,
    addItem,
    clearCart,
    isInCart,
    removeItem,
    total,
    addQty,
    removeQty,
  } = useCart();

  return (
    <CartContext.Provider
      value={{
        addItem,
        addQty,
        removeQty,
        cart,
        isInCart,
        removeItem,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
