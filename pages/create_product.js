import React, { useState } from "react";
// import styles from "@/styles/create_product.module.css"
const styles = require("@/styles/create_product.module.css");

const create_product = () => {
  const { main_createProduct } = styles;
  const [product_Data, setProduct_Data] = useState({
    productname: "",
    price: "",
    description: "",
  });
  // ======================= handleChange ========================
  const handleChange = (e) => {
    setProduct_Data({ ...product_Data, [e.target.name]: e.target.value });
  };
  // ======================= handleSubmit ========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/getAllProducts", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(product_Data),
      });
      if (response.ok) {
        alert("Successfully created the new product!");
      } else {
        console.error(
          "Error sending data to the backend:",
          response.statusText
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={main_createProduct} onSubmit={handleSubmit}>
      <h1>Create Product</h1>
      <input
        type="text"
        placeholder="Product Name"
        name="productname"
        value={product_Data.productname}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Product Price"
        name="price"
        value={product_Data.price}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Product Description"
        name="description"
        value={product_Data.description}
        onChange={handleChange}
      />
      <input type="submit" value="Create Product" />
    </form>
  );
};

export default create_product;

// export async function getStaticProps() {
//   // Fetch data from the API
//   const apiURL = "http://localhost:3000/api/getAllProducts";
//   const response = await fetch(apiURL, { method: "POST" });
//   const data = await response.json();
//   return {
//     props: {
//       data,
//     },
//     revalidate: 120,
//   };
// }
