import React from "react";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import "./App.css";
import "./Home.css"
import "./pages/login/Login.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Register1 from "./pages/register/AddressDetails";
import Register2 from "./pages/register/OtherDetails";
import Register3 from "./pages/register/Summary";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/register3" element={<Register3/>} />
      </Routes>
    </BrowserRouter>
  );
}     
