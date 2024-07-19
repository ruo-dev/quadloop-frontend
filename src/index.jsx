import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CategoriesProvider } from "./context/CategoryContext";
import { ProductsProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
          <AuthProvider>
               <UserProvider>
                    <CategoriesProvider>
                         <ProductsProvider>
                              <BrowserRouter>
                                   <App />
                              </BrowserRouter>
                         </ProductsProvider>
                    </CategoriesProvider>
               </UserProvider>
          </AuthProvider>
     </React.StrictMode>
);
