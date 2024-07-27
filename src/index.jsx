import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CategoriesProvider } from "./context/CategoryContext";
import { ProductsProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";
import { RolesProvider } from "./context/RoleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
          <AuthProvider>
               <UserProvider>
                    <RolesProvider>
                         <CategoriesProvider>
                              <ProductsProvider>
                                   <BrowserRouter>
                                        <App />
                                   </BrowserRouter>
                              </ProductsProvider>
                         </CategoriesProvider>
                    </RolesProvider>
               </UserProvider>
          </AuthProvider>
     </React.StrictMode>
);
