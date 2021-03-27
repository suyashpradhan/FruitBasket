import { useCart } from "../Context/CartContext";

export const Cart = () => {
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
    <>
      <main className="main">
        <h1 className="main-title">My Cart ({itemsInCart.length})</h1>
        <div className="row">
          <div className="col-9">
            <div className="card-group">
              {itemsInCart.map((item) => {
                return (
                  <div className="card" key={item.id}>
                    <div className="card-img-top">
                      <img src={item.productImage} alt="name"></img>
                    </div>
                    <div className="card-body">
                      <h2 className="product-title">{item.productName}</h2>
                      <h2 className="product-price">Rs {item.productPrice}</h2>

                      <div className="card-button-middle-row">
                        <button
                          className="extra increment"
                          onClick={() => incrementQuantity(item)}
                        >
                          +
                        </button>
                        <span className="product-quantity">
                          {item.productQuantity}
                        </span>
                        <button
                          className="extra decrement"
                          onClick={() => decrementQuantity(item)}
                        >
                          -
                        </button>
                      </div>

                      <div className="card-button-row">
                        <button
                          className="remove"
                          onClick={() => removeItemHandler(item)}
                        >
                          Remove From Cart
                        </button>
                        <button className="secondary">
                          <i className="far fa-heart icon"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <div className="cart-summary">
              <h1 className="cart-summary-title">Price Details</h1>
              <div className="cart-wrapper cart-summary-wrapper">
                <h2 className="cart-text item-info">Price (1 item)</h2>
                <h2 className="cart-text item-price">Rs 300</h2>
              </div>
              <div className="cart-wrapper tax-wrapper">
                <h2 className="cart-text tax-info">Taxes and Charges</h2>
                <h2 className="cart-text tax-price">Rs 32</h2>
              </div>
              <div className="cart-wrapper bill-wrapper">
                <h1 className="cart-text total-info">Total Price</h1>
                <h1 className="total-amount">Rs 500</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
