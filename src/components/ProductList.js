import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "../data/Product";
const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
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
