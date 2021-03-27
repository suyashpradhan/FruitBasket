import { useState } from "react";
import { useCart } from "../Context/CartContext";

export const SingleProduct = ({ product }) => {
  const {
    itemsInCart,
    setItemsInCart,
    buttonText,
    setButtonText,
    buttonBg,
    setButtonBg
  } = useCart();

  const addItemsToCart = (product) => {
    const itemExist = itemsInCart.find((item) => item.id === product.id);

    if (itemExist) {
      alert("Item Already in cart");
    } else {
      setItemsInCart([
        ...itemsInCart,
        {
          ...product,
          productQuantity: 1,
          productInCart: true
        }
      ]);
      setButtonText("Go to cart");
      setButtonBg(true);
    }
  };

  return (
    <div className="card" key={product.id}>
      <div className="card-img-top">
        <img src={product.productImage} alt="name"></img>
      </div>
      <div className="card-body">
        <h2 className="product-title">{product.productName}</h2>
        <h2 className="product-price">Rs {product.productPrice}</h2>

        <div className="card-button-row">
          <button
            className={buttonBg ? "ternary" : "primary"}
            onClick={() => {
              addItemsToCart(product);
            }}
          >
            {buttonText}
          </button>
          <button className="secondary">
            <i className="far fa-heart icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
