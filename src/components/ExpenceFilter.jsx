import React from "react";

const ExpenceFilter = ({ onSelectCategory }) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All categories</option>
        <option value="Utilities">Utilities</option>
        <option value="Groceries">Groceries</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </>
  );
};

export default ExpenceFilter;
