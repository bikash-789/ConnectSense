import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LoginSignup";
import Home from "./components/Home";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login element="login" />} />
        <Route path="/signup" exact element={<Login element="signup" />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
