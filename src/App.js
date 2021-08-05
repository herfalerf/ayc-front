import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Routes from "./routes/Routes";
import AycApi from "./api/api";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "ayc-token";

// AYC application

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
