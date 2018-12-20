import React from "react";
import { Link } from "react-router-dom";

import "./Category.css";

export default function({ category }) {
  return (
    <div className="category-name">
      <Link to={`/categories/${category.id}`} className="category-title">
        {category.name}
      </Link>
    </div>
  );
}
