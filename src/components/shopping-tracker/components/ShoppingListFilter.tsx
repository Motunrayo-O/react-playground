import React from "react";
import categories from "../categories";

interface Props {
  onCategorySelected: (category: string) => void;
}

const ShoppingListFilter = ({ onCategorySelected }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onCategorySelected(event.currentTarget.value)}
    >
      <option value="">All Categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};

export default ShoppingListFilter;
