import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some(product => product.id === id)

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart(prev => {
        return [...prev, productToAdd]
      })
    } else {
      console.log("NADA");
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id))
  }

  const getTotal = () => {
    let total = 0

    cart.forEach(prod => {
      total += prod.price * prod.qty
    })
    return total
  }


  const total = getTotal();

  return (

    <CartContext.Provider value={{ addItem, cart, isInCart, removeItem, total, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}