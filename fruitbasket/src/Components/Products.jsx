import { dataObj } from "../API/data";
import { SingleProduct } from "./SingleProduct";

export const Products = () => {
  return (
    <>
      <main className="main">
        <h1 className="main-title">All Products ({dataObj.length})</h1>
        <div className="card-group">
          {dataObj.map((product) => {
            return <SingleProduct key={product.id} product={product} />;
          })}
        </div>
      </main>
    </>
  );
};
