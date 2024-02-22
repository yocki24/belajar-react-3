import React from "react";
import { useState } from "react";

const ProductCreate = ({ onCreateProduct }) => {
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = FormData;

  const handleShow = () => {
    setShowForm(!showForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="product-create">
      <div className="toggle-add">
        <button className="edit-input-submit add-toggle" onClick={handleShow}>
          {showForm ? "Close Form" : "Add Product"}
        </button>
      </div>
      {showForm && (
        <form className="form">
          <div className="form-add-title">Add Prodcut</div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="nama"
              placeholder="Nama Product"
              value={nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="deskripsi"
              placeholder="Deskripsi Product"
              value={deskripsi}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="imageURL"
              placeholder="Image Url"
              value={imageURL}
              onChange={handleChange}
            />
          </div>
          <input
            onClick={handleSubmit}
            type="submit"
            className="edit-input-submit add"
          />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
