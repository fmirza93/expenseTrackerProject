import React, { useState } from 'react';

const CategoryDropdown = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Food', 'Transport', 'Utilities', 'Entertainment', 'Healthcare', 'Other'
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onCategoryChange(e.target.value);
  };

  return (
    <select
      className="p-2 border border-gray-300 rounded-2xl w-full"
      value={selectedCategory}
      onChange={handleCategoryChange}
    >
      <option value="" disabled>Select Category</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>{category}</option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
