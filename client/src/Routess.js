import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LoginSignup";
import Home from "./components/Home";
import PrivateRoute from "./PrivateRoutes";
import ObjectDetection from "./components/ObjectDetection";
import TTS from "./components/TTS";
import VoiceNavigation from "./components/VoiceNavigation";
import ToDoList from "./components/ToDoList";
import STT from "./components/STT";
function Routess() {
  return (
    <BrowserRouter>
      <VoiceNavigation />
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
        <Route
          path="/tts"
          exact
          element={
            <PrivateRoute>
              <TTS />
            </PrivateRoute>
          }
        />
        <Route
          path="/todo-list"
          exact
          element={
            <PrivateRoute>
              <ToDoList />
            </PrivateRoute>
          }
        />
        <Route
          path="/stt"
          exact
          element={
            <PrivateRoute>
              <STT />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
