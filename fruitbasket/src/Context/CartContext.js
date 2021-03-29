import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [itemsInWishlist, setItemsInWishlist] = useState([]);

  return (
    <>
      <CartContext.Provider
        value={{
          itemsInCart,
          setItemsInCart,
          itemsInWishlist,
          setItemsInWishlist,
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
