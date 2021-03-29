import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./Context/CartContext";
import { ProductsContextProvider } from "./Context/ProductContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductsContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsContextProvider>
  </StrictMode>,
  rootElement
);
