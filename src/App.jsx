import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Rutas
import Home from "./pages/Home";
import Country from "./pages/Country";
import Error from "./pages/404";

//components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<Country />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
