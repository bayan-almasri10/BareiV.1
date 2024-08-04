"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie"; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const cartFromCookies = Cookies.get("cart");
  const [cart, setCart] = useState(
     cartFromCookies ? JSON.parse(cartFromCookies) : { cartItems: [] }
  );
    
  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    const cartFromCookies = Cookies.get("cart");
    setCart(cartFromCookies ? JSON.parse(cartFromCookies) :[] );
  };

  const addItemToCart = async ({
    id,
    name,
    price,
    image,
    stock,
    seller,
    quantity = 1,
  }) => {
    const item = {
      id,
      name,
      price,
      image,
      stock,
      seller,
      quantity,
    };
    const isItemExist = cart.cartItems?.find((i) => i.id === item.id);

    let newCartItems;
    if (isItemExist) {
      newCartItems = cart.cartItems.map((i) =>
        i.id === isItemExist.id ? item : i
      );
    } else {
      newCartItems = [...cart?.cartItems, item];
    }

    Cookies.set("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart.cartItems.filter((i) => i.id !== id);
    Cookies.set("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const clearCartItems = () => {
    const newCartItems = [];
    Cookies.set("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        clearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
