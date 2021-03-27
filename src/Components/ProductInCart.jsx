import { useCart } from "../Context/CartContext";

export const ProductInCart = ({ product }) => {
  const { itemsInCart, setItemsInCart } = useCart();

  const incrementQuantity = (itemObj) => {
    const itemExist = itemsInCart.find((item) => item.id === itemObj.id);
    itemExist
      ? setItemsInCart(
          itemsInCart.map((item) =>
            item.id === itemObj.id
              ? {
                  ...itemExist,
                  productQuantity: itemExist.productQuantity + 1
                }
              : item
          )
        )
      : setItemsInCart([...itemsInCart, { ...itemObj, productQuantity: 1 }]);
  };

  const decrementQuantity = (itemObj) => {
    const itemExist = itemsInCart.find((item) => item.id === itemObj.id);
    itemExist.productQuantity <= 1
      ? setItemsInCart(itemsInCart.filter((item) => item.id !== itemObj.id))
      : setItemsInCart(
          itemsInCart.map((item) =>
            item.id === itemObj.id
              ? { ...itemExist, productQuantity: itemExist.productQuantity - 1 }
              : item
          )
        );
  };

  const removeItemHandler = (itemObj) =>
    setItemsInCart(itemsInCart.filter((item) => itemObj.id !== item.id));
  return (
    <div className="card" key={product.id}>
      <div className="card-img-top">
        <img src={product.productImage} alt="name"></img>
      </div>
      <div className="card-body">
        <h2 className="product-title">{product.productName}</h2>
        <h2 className="product-price">Rs {product.productPrice}</h2>

        <div className="card-button-middle-row">
          <button
            className="extra increment"
            onClick={() => incrementQuantity(product)}
          >
            +
          </button>
          <span className="product-quantity">{product.productQuantity}</span>
          <button
            className="extra decrement"
            onClick={() => decrementQuantity(product)}
          >
            -
          </button>
        </div>

        <div className="card-button-row">
          <button className="remove" onClick={() => removeItemHandler(product)}>
            Remove From Cart
          </button>
          <button className="secondary">
            <i className="far fa-heart icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
