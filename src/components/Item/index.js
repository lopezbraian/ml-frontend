import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import shipping from "../../Assets/ic_shipping@2x.png.png";

export default function Item({ data }) {
  return (
    <div className="item-container">
      <Link to={`/items/${data.id}`} className="item__picture">
        <img src={data.picture} alt={`item-${data.title}`} />
      </Link>
      <div className="item__detail">
        <p className="item__detail__p item__detail__p--p1">
          $ {new Intl.NumberFormat("es-AR").format(data.price.price)}
          {data.free_shipping && (
            <span>
              <img src={shipping} alt="shipping" />
            </span>
          )}
        </p>
        <p className="item__detail__p item__detail__p--p2">{data.title}</p>
      </div>
      <div className="item__location">
        <p>{data.address}</p>
      </div>
    </div>
  );
}
