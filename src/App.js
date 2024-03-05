import "./App.css";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
// import { Products } from "./data/Product";
import ProductCreate from "./components/ProductCreate";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const getDataProduct = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/cars/get-cars");
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getDataProduct();
  }, []);

  const onEditProduct = async (id, data) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/cars/update-cars/${id}`,
        data
      );
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        return { ...prod, ...data };
      }
      return prod;
    });
    setProducts(updatedProducts);
  };

  const onCreateProduct = async (product) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/cars/add-cars",
        product
      );
      const newData = Array.isArray(response.data.data)
        ? response.data.data
        : [response.data.data];
      setProducts([...products, ...newData]);
      console.log("test data input");
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onDeleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/cars/delete-cars/${id}`
      );
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    const updatedProduct = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProduct);
  };
  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        products={products}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
      />
    </>
  );
}

export default App;
