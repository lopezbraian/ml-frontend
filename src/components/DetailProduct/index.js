import React from "react";
import Button from "../../components/Button";
import "./index.css";

export default function DetailProduct({ data }) {
  return (
    <div className="page-container">
      <div className="product-detail">
        <div className="product-image">
          <img src={data.picture} alt="" />
        </div>
        <div className="product-action">
          <p>
            {data.condition === "new" ? "Nuevo" : "Usado"} -{" "}
            {data.sold_quantity} vendidos
          </p>
          <p>{data.title}</p>
          <p>$ {Intl.NumberFormat("es-AR").format(data.price.amount)}</p>
          <Button text="Comprar" />
        </div>
      </div>
      <div className="product-description">
        <p>Descripción del producto</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
