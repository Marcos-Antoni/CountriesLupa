import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

// hook
import useHeader from "./useHeader";

export default function index() {
  const { input, setInput, toSearch } = useHeader();
  return (
    <header className="Header">
      <h1>
        <Link to="/">Countries</Link>
      </h1>
      <form className="Header_busqueda center" onSubmit={(e) => toSearch(e)}>
        <button type="submit" className="Header_busqueda-btn btn">
          Search
        </button>
        <input
          type="text"
          placeholder="Search"
          className="Header_busqueda-input"
          value={input}
          onChange={(e) => setInput(e.target.value || "")}
        />
      </form>
    </header>
  );
}
