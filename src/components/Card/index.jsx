import React from "react";
import { Link } from "react-router-dom";

//css
import "./index.css";

export default function index({ contry }) {
  return (
    <div className="center">
      <Link to={`/${contry.name.common}`}>
        <div className="card">
          <img className="card_img" src={contry.flags.svg} alt={contry.name.common} />

          <div className="card_content">
            <h3 className="card_content-h3">{contry.name.common}</h3>
            <p className="card_content-p">
              <b>Population:</b> {contry.population}
            </p>
            <p className="card_content-p">
              <b>Regin:</b> {contry.region}
            </p>
            <p className="card_content-p">
              <b>Capital:</b> {contry.capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
