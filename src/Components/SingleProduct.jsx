import { useCart } from "../Context/CartContext";

export const SingleProduct = ({ product }) => {
  const { itemsInCart, addItemsToCart } = useCart();

  const itemExist = (product) => {
    return itemsInCart.find((item) => item.id === product.id);
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
          {itemExist(product) ? (
            <button className="ternary">Go to cart</button>
          ) : (
            <button onClick={() => addItemsToCart(product)} className="primary">
              Add to cart
            </button>
          )}
          <button
            className="secondary"
            /* onClick={() => addItemsToWishlist(product)} */
          >
            <i className="far fa-heart icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

/** const addItemsToWishlist = (product) => {
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
  }; */
