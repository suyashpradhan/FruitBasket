import { useCart } from "../Context/CartContext";
import { PriceSummary } from "./PriceSummary";
import { ProductInCart } from "./ProductInCart";

export const Cart = () => {
  const { itemsInCart } = useCart();

  return (
    <>
      <main className="main">
        {itemsInCart.length !== 0 ? (
          <>
            <h1 className="main-title">My Cart ({itemsInCart.length})</h1>
            <div className="row">
              <div className="col-9 ">
                <div className="card-group">
                  {itemsInCart.map((item) => {
                    return <ProductInCart product={item} />;
                  })}
                </div>
              </div>
              <PriceSummary />
            </div>
          </>
        ) : (
          <>
            <h1 className="main-title">My Cart</h1>
            <h1 className="cart-text" style={{ textAlign: "center" }}>
              Your cart is empty, add something!!!
            </h1>
          </>
        )}
      </main>
    </>
  );
};
