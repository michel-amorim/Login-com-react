import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Private } from "./pages/Private";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header da pagina</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Private</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </div>
  );
}

export default App;
