import React from "react";
import "./index.css";

export default function ListCategory({ category }) {
  return (
    <ul className="categories-container">
      {category.map((c, index) => (
        <li className="categories__li" key={index}>
          {c.name} <span>&gt;</span>
        </li>
      ))}
    </ul>
  );
}
