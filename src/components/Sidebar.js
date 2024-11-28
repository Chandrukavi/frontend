import React from "react";

const Sidebar = ({ onFilter }) => {
  const handleFilter = (e) => {
    const filters = { category: e.target.value };
    onFilter(filters);
  };

  return (
    <div className="w-1/4 p-4">
      <select onChange={handleFilter} className="border p-2 w-full">
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
      </select>
    </div>
  );
};

export default Sidebar;
