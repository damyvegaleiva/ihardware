import { createContext } from "react";
import useCart from "../Hooks/useCart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, addItem, clearCart, isInCart, removeItem, total, add, subs } =
    useCart();

  return (
    <CartContext.Provider
      value={{
        addItem,
        add,
        subs,
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
