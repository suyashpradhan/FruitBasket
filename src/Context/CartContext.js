import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [itemsInWishlist, setItemsInWishlist] = useState([]);

  const addItemsToCart = (product) => {
    setItemsInCart([
      ...itemsInCart,
      {
        ...product,
        productQuantity: 1,
        productInCart: true,
      },
    ]);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          itemsInCart,
          setItemsInCart,
          itemsInWishlist,
          setItemsInWishlist,
          addItemsToCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
