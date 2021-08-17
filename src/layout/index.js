import React from "react";
import BoxSearcher from "../components/BoxSearcher";

export default function Layout({ children }) {
  return (
    <div>
      <BoxSearcher />
      {children}
    </div>
  );
}
