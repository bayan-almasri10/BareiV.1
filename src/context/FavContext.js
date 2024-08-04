"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const getInitialFav = () => {
    try {
      const favData = Cookies.get("fav");
      return favData? JSON.parse(favData) : { favItems: [] };
    } catch (error) {
      console.error("Error parsing fav data from cookie:", error);
      return { favItems: [] };
    }
  };

  const [fav, setFav] = useState(getInitialFav);

  const setFavToState = useCallback(() => {
      setFav(getInitialFav());
    }, [setFav]);
  
    useEffect(() => {
      setFavToState();
    }, [setFavToState]);

  const addItemToFav = async ({
    id,
    name,
    price,
    image,
    stock,
    seller,
    quantity = 1,
  }) => {
    const Item = {
      id,
      name,
      price,
      image,
      stock,
      seller,
      quantity,
    };

    const isItemExist = fav.favItems.find((I) => I.id === Item.id);

    let newFavItems;
    if (isItemExist) {
      newFavItems = fav.favItems.map((I) =>
        I.id === isItemExist.id? Item : I
      );
    } else {
      newFavItems = [...fav.favItems, Item];
    }

    Cookies.set("fav", JSON.stringify({ favItems: newFavItems }));
    setFavToState();
  };

  const deleteItemFromFav = (id) => {
    const newFavItems = fav.favItems.filter((i) => i.id!== id);
    Cookies.set("fav", JSON.stringify({ favItems: newFavItems }));
    setFavToState();
  };

  const clearFavItems = () => {
    const newFavItems = [];
    Cookies.set("fav", JSON.stringify({ favItems: newFavItems }));
    setFavToState();
  };

  return (
    <FavContext.Provider
      value={{
        fav,
        addItemToFav,
        deleteItemFromFav,
        clearFavItems,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export const useFavContext = () => useContext(FavContext);