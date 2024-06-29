import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RefreshProvider } from "./context/RefreshProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
          <RefreshProvider>
               <BrowserRouter>
                    <App />
               </BrowserRouter>
          </RefreshProvider>
     </React.StrictMode>
);
