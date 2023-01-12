import React from "react";
import { Link, useNavigate } from "react-router-dom";

//css
import "./index.css";

//hook
import useBodyContry from "./useBodyContry";
import Loading from "../Loading";

export default function index() {
  // use
  const { contrys, currencies, languages, borders, countryName } = useBodyContry();
  const navigate = useNavigate();

  return contrys[0] ? (
    <div className="bodyContry">
      <button className="btn bodyContry_back" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="bodyContry_card">
        <img
          className="bodyContry_img"
          src={contrys[0].flags.svg}
          alt={contrys[0].name.common}
        />
        <div className="bodyContry_content_info">
          <h1>{contrys[0].name.common}</h1>
          <div className="bodyContry_info">
            <p className="bodyContry_info-p">
              <b className="bodyContry_info-b">Official English name:</b>{" "}
              {contrys[0].name.official}
            </p>
            <p className="bodyContry_info-p">
              <b className="bodyContry_info-b">Official name in Spanish:</b>{" "}
              {contrys[0].translations.spa.official}
            </p>
            <p className="bodyContry_info-p">
              <b className="bodyContry_info-b">Currency:</b> {currencies}
            </p>
            <p className="bodyContry_info-p">
              <b className="bodyContry_info-b">Capital:</b> {contrys[0].capital}
            </p>
            <p className="bodyContry_info-p">
              <b className="bodyContry_info-b">region and subregion:</b>{" "}
              {`${contrys[0].region} and ${contrys[0].subregion}`}
            </p>
            <p className="bodyContry_info-p">
              <b className="bodyContry_info-b">languages:</b> {languages}
            </p>
            <p className="bodyContry_info-p">
              <b className="bodyContry_info-b">Population:</b> {contrys[0].population}
            </p>
          </div>
          {borders[0] && (
            <div className="bodyContry_btns">
              <p>Bordering countries: </p>
              {borders.map((value, index) => (
                <Link to={`/${value}`} key={index}>
                  <button className="bodyContry_btns-btn btn">{value}</button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loading text={`${countryName}...`} previous />
  );
}
