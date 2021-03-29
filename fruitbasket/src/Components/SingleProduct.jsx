import { useState } from "react";
import { useCart } from "../Context/CartContext";

export const SingleProduct = ({ product }) => {
  const {
    itemsInCart,
    setItemsInCart,
    itemsInWishlist,
    setItemsInWishlist,
  } = useCart();
  const [buttonText, setButtonText] = useState("Add to cart");
  const [buttonBg, setButtonBg] = useState(false);

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
          productInCart: true,
        },
      ]);
      setButtonBg(true);
      setButtonText("Go to the cart");
    }
  };

  const addItemsToWishlist = (product) => {
    const itemExist = itemsInWishlist.find((item) => item.id === product.id);

    if (itemExist) {
      alert("Item Already Wishlisted");
    } else {
      setItemsInWishlist([
        ...itemsInWishlist,
        {
          ...product,
          productInWishlist: true,
        },
      ]);
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
          <button
            className="secondary"
            onClick={() => addItemsToWishlist(product)}
          >
            <i className="far fa-heart icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
