import React, { useState } from "react";
import "./index.css";
import logo from "../../Assets/Logo_ML@2x.png.png";
import search from "../../Assets/ic_Search@2x.png.png";
import { Link, useHistory } from "react-router-dom";

export default function BoxSearcher() {
  const history = useHistory();

  const [value, setValue] = useState("");

  const goToSearch = (e) => {
    e.preventDefault();
    if (value !== "") {
      history.push(`/items?q=${value}`);
    }
  };
  return (
    <div className="box-container">
      <div className="box-searcher">
        <Link to="/" className="box-searcher__img">
          <img src={logo} alt="logo-mercadolibre" />
        </Link>
        <form onSubmit={goToSearch} className="box-searcher__input">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Nunca dejes de buscar"
            type="text"
          ></input>
          <button type="submit">
            <img src={search} alt="search-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
