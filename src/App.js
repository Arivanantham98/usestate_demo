import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
import Product from "./Components/Product";

const App = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={state && <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:name" element={<Product />} />
      </Routes>
      <button onClick={() => setState(!state)}>
        {state ? "hide homepage" : "show homepage"}
      </button>
    </>
  );
};

export default App;
