import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from "react-helmet-async";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>  
);
