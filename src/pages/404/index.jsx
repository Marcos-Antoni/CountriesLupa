import React from "react";
import { Link } from "react-router-dom";

//css
import "./index.css";

export default function index() {
  return (
    <div className="error center">
      <Link className="error_message" to={"/"}>
        404! Click to return to the home page
      </Link>
    </div>
  );
}
