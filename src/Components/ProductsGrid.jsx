import React, { useContext } from "react";
import { SingleProduct } from "./SingleProduct";
import { ProductsContext } from "../Context/ProductContext";

export const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <main className="main">
        <h1 className="main-title">All Products ({products.length})</h1>
        <div className="row">
          <div className="col-12">
            <div className="card-group">
              {products.map((product) => (
                <SingleProduct key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
