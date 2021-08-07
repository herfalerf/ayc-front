import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Navigation from "./nav/Navigation";
import Routes from "./routes/Routes";
import ContactForm from "./contact/ContactForm";
import AycApi from "./api/api";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "ayc-token";

// AYC application

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
