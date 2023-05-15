import { createContext, useState } from "react";
import { ICartContext, Prods } from "../types/types";

export const CartContext = createContext<ICartContext>({} as ICartContext)

export const CartProvider = ({children}: {children: JSX.Element}) =>{

  const [cart, setCart] = useState<Prods[]>([])

  const addItemsToCart = (key: string, value: Prods[]) =>{
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getItemsFromCart = (key: string) =>{
   const item = localStorage.getItem(key)

    if(item){
     const storageItems = JSON.parse(item)
     setCart(storageItems)
    }else{
      return []
    }
  }

  const removeItemsFromCart = (prod: Prods) =>{
      const removedItem = cart.filter((item) => item.id !== prod.id)
      setCart(removedItem)
      addItemsToCart('cart', removedItem)
  }

  const clearCart = (key: string) =>{
   localStorage.removeItem(key)
   setCart([])
  }

  const cartAdvice = (component: JSX.Element) =>{
    return component
  }
  
  return(
    <CartContext.Provider value={{
      cart, 
      setCart, 
      addItemsToCart, 
      getItemsFromCart, 
      removeItemsFromCart,
      clearCart,
      cartAdvice
  }}>
      {children}
    </CartContext.Provider>
  )
}