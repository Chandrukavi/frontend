import React, { useState } from "react";
import { addProduct } from "../api";

const AdminDashboard = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) formData.append(key, product[key]);
    if (image) formData.append("image", image);

    try {
      await addProduct(formData);
      alert("Product added!");
    } catch (error) {
      alert("Failed to add product!");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          type="number"
          placeholder="Price"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Category"
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        ></textarea>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2"
          accept="image/*"
          id="product-image"
          aria-label="Product Image"
        />

        <button className="bg-blue-500 text-white p-2" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
