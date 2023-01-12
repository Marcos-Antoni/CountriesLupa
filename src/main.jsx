import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// css
import "./styles/variables.css";
import "./styles/estilosPorDefecto.css";

//context
import Data from "./context/useContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Data>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Data>
  </React.StrictMode>
);
