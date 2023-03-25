import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LoginSignup";
import Home from "./components/Home";
import PrivateRoute from "./PrivateRoutes";

function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login element="login" />} />
        <Route path="/login" exact element={<Login element="login" />} />
        <Route path="/signup" exact element={<Login element="signup" />} />
        <Route
          path="/home"
          exact
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
