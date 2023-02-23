import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./core/LoginSignup";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login element="login" />} />
        <Route path="/signup" exact element={<Login element="signup" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
