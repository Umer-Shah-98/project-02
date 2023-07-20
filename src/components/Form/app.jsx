import React from "react";
import { BrowserRouter, Routes, Router } from "react-router-dom";
import login from "./Login";
import Signup from "../Signup";
import "bootstrap/dist/css/bootstrap.min.css";
function app() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default app;
