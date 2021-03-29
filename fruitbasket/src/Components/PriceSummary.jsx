import { useCart } from "../Context/CartContext";

export const PriceSummary = () => {
  const { itemsInCart } = useCart();

  const itemsPrice = itemsInCart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.productQuantity * currentValue.productPrice,
    0
  );
  const taxPrice = itemsPrice * 0.1;
  const totalPrice = itemsPrice + taxPrice;

  return (
    itemsInCart.length !== 0 && (
      <div className="col-3">
        <div className="cart-summary">
          <h1 className="cart-summary-title">Price Details</h1>
          <div className="cart-wrapper cart-summary-wrapper">
            <h2 className="cart-text item-info">
              Price ({itemsInCart.length}) items
            </h2>
            <h2 className="cart-text item-price">Rs {itemsPrice}</h2>
          </div>
          <div className="cart-wrapper tax-wrapper">
            <h2 className="cart-text tax-info">Taxes and Charges</h2>
            <h2 className="cart-text tax-price">Rs {taxPrice.toFixed(2)}</h2>
          </div>
          <div className="cart-wrapper bill-wrapper">
            <h1 className="cart-text total-info">Total Price</h1>
            <h1 className="total-amount">Rs {totalPrice}</h1>
          </div>
        </div>
      </div>
    )
  );
};
