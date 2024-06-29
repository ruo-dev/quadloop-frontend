import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { BackTop } from "antd";
import { Cart, Home, NoPage, Products } from "./Pages";
import { Navbar, Footer } from "./Components";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Recover from "./Pages/Recover";
import { ProductDetails } from "./Pages/Product";
import { SWRConfig } from "swr";
import { useRefresh } from "./context/RefreshProvider";

const App = () => {
     const { refresh } = useRefresh();

     useEffect(() => {
          console.log("component refreshed!");
     }, [refresh]);

     return (
          <SWRConfig
               value={{
                    shouldRetryOnError: false,
                    revalidateOnFocus: false,
                    revalidateOnMount: false,
                    revalidateOnReconnect: true,
                    refreshWhenOffline: true,
                    refreshWhenHidden: false,
               }}
          >
               <div className=" bg-white ">
                    <Navbar />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/login" element={<Login />} />
                         <Route path="/register" element={<Register />} />
                         <Route path="/recover" element={<Recover />} />
                         <Route path="/products" element={<Products />} />
                         <Route
                              path="/products/:productId"
                              element={<ProductDetails />}
                         />
                         <Route
                              path="/cart"
                              element={
                                   <>
                                        <Cart />
                                   </>
                              }
                         />
                         <Route path="/*" element={<NoPage />} />
                    </Routes>
                    <Footer />
                    <BackTop />
               </div>
          </SWRConfig>
     );
};

export default App;
