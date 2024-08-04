"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const getInitialOrder = () => {
    try {
      const OrderData = Cookies.get("order");
      return OrderData ? JSON.parse(OrderData) : {orderItems: []};
    } catch (error) {
      console.error("Error parsing fav data from cookie:", error);
      return { orderItems: [] };
    }
  };

  const [order, setOrder] = useState(getInitialOrder);

  useEffect(() => {
    setOrderToState();
  }, [setOrderToState]);
  
  const setOrderToState = useCallback(() => {
    setOrder(getInitialOrder());
  }, [setOrder]);

  const addItemToOrder = async (Item) => {
    const isItemExist = order.orderItems.find((I) => I.id === Item.id);

    let newOrderItems;
    if (isItemExist) {
      newOrderItems = order.orderItems.map((I) =>
        I.id === isItemExist.id ? Item : I
      );
    } else {
      newOrderItems = [...order.orderItems, Item];
    }

    Cookies.set("order", JSON.stringify({ orderItems: newOrderItems }));
    setOrderToState();
  };

  const deleteItemFromOrder = (id) => {
    const newOrderItems = order.orderItems.filter((i) => i.id !== id);
    Cookies.set("order", JSON.stringify({ orderItems: newOrderItems }));
    setOrderToState();
  };

  const clearOrderItems = () => {
    const newOrderItems = [];
    Cookies.set("order", JSON.stringify({ orderItems: newOrderItems }));
    setOrderToState();
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        addItemToOrder,
        deleteItemFromOrder,
        clearOrderItems,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => useContext(OrderContext);