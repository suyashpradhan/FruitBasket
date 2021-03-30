import { useCart } from "../Context/CartContext";

export const Wishlist = () => {
  const { itemsInWishlist } = useCart();
  return (
    <>
      <main className="main">
        <h1 className="main-title">My Wishlist </h1>
        <div className="card-group">
          {itemsInWishlist.map((product) => {
            return (
              <div className="card" key={product.id}>
                <div className="card-img-top">
                  <img src={product.productImage} alt="name"></img>
                </div>
                <div className="card-body">
                  <h2 className="product-title">{product.productName}</h2>
                  <h2 className="product-price">Rs {product.productPrice}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
