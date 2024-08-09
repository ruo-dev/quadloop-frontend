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
import { RewardsProvider } from "./context/RewardContext";
import { AnalyticsProvider } from "./context/AnalyticsContext";
import { OrderProvider } from "./context/OrderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
          <AuthProvider>
               <UserProvider>
                    <RolesProvider>
                         <CategoriesProvider>
                              <ProductsProvider>
                                   <RewardsProvider>
                                        <AnalyticsProvider>
                                             <OrderProvider>
                                                  <BrowserRouter>
                                                       <App />
                                                  </BrowserRouter>
                                             </OrderProvider>
                                        </AnalyticsProvider>
                                   </RewardsProvider>
                              </ProductsProvider>
                         </CategoriesProvider>
                    </RolesProvider>
               </UserProvider>
          </AuthProvider>
     </React.StrictMode>
);
