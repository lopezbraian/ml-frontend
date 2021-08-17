import React from "react";

import "./index.css";

export default function Button({ color, size, text }) {
  const style = {
    backgroundColor: "var(--color-blue)",
    color: "white",
    fontSize: "18px",
    borderRadius: "4px",
    border: "0",
    width: "220px",
    height: "37px",
    cursor: "pointer",
  };
  return (
    <button className="button-primary" style={style}>
      {text}
    </button>
  );
}
