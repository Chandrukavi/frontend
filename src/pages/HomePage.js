import React from "react";
import ProductPage from "../components/ProductPage";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Product Listing</h1>
      <ProductPage />
    </div>
  );
};

export default HomePage;
