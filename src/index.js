import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MovieProvider from "./context/Movie.context";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
          <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);
