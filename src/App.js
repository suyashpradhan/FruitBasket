import { useState } from "react";
import { Cart } from "./Components/Cart";
import { Wishlist } from "./Components/Wishlist";
import { ProductsGrid } from "./Components/ProductsGrid";

import "./styles.css";

export default function App() {
  const [route, setRoute] = useState("products");
  return (
    <>
      <header className="navbar">
        <nav className="nav">
          <button className="logo" onClick={() => setRoute("products")}>
            FruitBasket
          </button>
          <button
            className="action-links"
            onClick={() => {
              setRoute("wishlist");
            }}
          >
            Wishlist
          </button>
          <button
            className="action-links"
            onClick={() => {
              setRoute("cart");
            }}
          >
            Cart
          </button>
        </nav>
      </header>

      {route === "products" && <ProductsGrid />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <Wishlist />}
    </>
  );
}
