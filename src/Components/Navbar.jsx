import React from "react";

export function Navbar(props) {
  return (
    <div>
      <header className="navbar">
        <nav className="nav">
          <button
            className="logo"
            onClick={() => props.data.setRoute("products")}
          >
            FruitBasket
          </button>
          <button
            className="action-links"
            onClick={() => {
              props.data.setRoute("wishlist");
            }}
          >
            Wishlist
          </button>
          <button
            className="action-links"
            onClick={() => {
              props.data.setRoute("cart");
            }}
          >
            Cart
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
