import React, { useEffect, useState } from "react";
import { getProducts } from "../api";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (filters = {}) => {
    const { data } = await getProducts(filters);
    setProducts(data);
  };

  return (
    <div className="flex">
      <Sidebar onFilter={fetchProducts} />
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
