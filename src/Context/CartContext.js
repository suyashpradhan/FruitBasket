import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [buttonText, setButtonText] = useState("Add to cart");
  const [buttonBg, setButtonBg] = useState(false);

  return (
    <>
      <CartContext.Provider
        value={{
          itemsInCart,
          setItemsInCart,
          buttonText,
          setButtonText,
          buttonBg,
          setButtonBg
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
