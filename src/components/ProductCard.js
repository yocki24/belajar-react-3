import React from "react";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import ProductEdit from "./ProductEdit";

const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
  const { id, nama, deskripsi, imageURL } = product;
  const [sumProduct, setSumProduct] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const kurangProduck = () => {
    setSumProduct(sumProduct - 1);
  };
  const tambahProduck = () => {
    setSumProduct(sumProduct + 1);
  };
  // const handleDelete = () => {
  //   onDeleteProduct(id);
  // };
  // const handleShow = () => {
  //   setShowEdit(!showEdit);
  // };
  const handleSubmit = (id, data) => {
    setShowEdit(false);
    onEditProduct(id, data);
  };
  // const cancelEdit = () => {
  //   setShowEdit(false);
  // };
  return (
    <>
      <div className="card">
        {showEdit ? (
          <ProductEdit
            product={product}
            onEditProduct={handleSubmit}
            cancelEdit={() => {
              setShowEdit(false);
            }}
          />
        ) : (
          <>
            <div className="edit-delete">
              <MdEdit
                onClick={() => {
                  setShowEdit(!showEdit);
                }}
                className="icon-edit"
              />
              <MdDelete
                onClick={() => {
                  onDeleteProduct(id);
                }}
                className="icon-delete"
              />
            </div>
            <img
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "10px 10px 0px 0px",
              }}
              src={imageURL}
              alt=""
            ></img>
            <div className="container">
              <h4>
                <b>{nama}</b>
              </h4>
              <p>{deskripsi}</p>
            </div>
            <div
              className={`card-keranjang ${
                sumProduct > 0 ? "jumlah-product" : "show-keranjang"
              }`}
            >
              {sumProduct > 0 ? (
                <>
                  <button onClick={kurangProduck} className="button">
                    -
                  </button>
                  <div>{sumProduct}</div>
                  <button onClick={tambahProduck} className="button">
                    +
                  </button>
                </>
              ) : (
                <div className="keranjang" onClick={tambahProduck}>
                  {" "}
                  +Keranjang
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default ProductCard;
