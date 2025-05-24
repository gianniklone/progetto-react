import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RecipeProvider } from "./context/RecipeContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import "./style/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </HelmetProvider>
);
