import React from "react";
import ProductCard from "./ProductCard";
// import { Products } from "../data/Product";
const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
  console.log("Test Get Data");
  console.log(products);
  return (
    <>
      <div className="cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            // image={product.imageURL}
            // title={product.nama}
            // desc={product.deskripsi}
            onDeleteProduct={onDeleteProduct}
            onEditProduct={onEditProduct}
          />
        ))}
      </div>
    </>
  );
};
export default ProductList;
