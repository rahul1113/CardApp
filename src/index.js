// filepath: c:\Users\rahul\OneDrive\Desktop\Resumes\portfolio-react\src\index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Use the new API
import App from "./App";
import "./assets/styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
