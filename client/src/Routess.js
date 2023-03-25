import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LoginSignup";
import Home from "./components/Home";
import PrivateRoute from "./PrivateRoutes";
import ObjectDetection from "./components/ObjectDetection";

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
        <Route
          path="/object-detection"
          exact
          element={
            <PrivateRoute>
              <ObjectDetection />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
