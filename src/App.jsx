import React from "react";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import "./App.css";
import "./Home.css"
import "./pages/login/Login.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Register1 from "./pages/Register1";
import Register2 from "./pages/Register2";
import Register3 from "./pages/Register3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Register1" element={<Register1 />} />
        <Route path="/Register2" element={<Register2 />} />
        <Route path="/Register3" element={<Register3/>} />
      </Routes>
    </BrowserRouter>
  );
}     
