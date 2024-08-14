import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { BackTop } from "antd";
import { Cart, Home, NoPage, Products } from "./Pages";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Recover from "./Pages/Recover";
import { ProductDetails } from "./Pages/Product";
import Cookies from "js-cookie";
import { useAuthContext } from "./context/AuthContext";
import useGetAllCartItems from "./hooks/Cart/useGetAllCartItems";
import AdminApp from "./Pages/Admin/AdminApp";
import { useProducts } from "./context/ProductContext";
import { Layout } from "./Components/Layout";
import Distributor from "./Pages/Distributor";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./Pages/ResetPassword";
import UserProfile from "./Pages/UserProfile";

const App = () => {
     const token = Cookies.get("jwt");
     const auth = useAuthContext();
     const { data: products, fetchData: getProducts } = useProducts();
     const { data, fetchData: getCartItems, setData } = useGetAllCartItems();


     return (
          <>
               <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
               />
               <div className=" bg-white ">
                    <Routes>
                         <Route
                              path="/"
                              element={
                                   <Layout cartItems={data}>
                                        <Home products={products ?? []} />
                                   </Layout>
                              }
                         />
                         <Route
                              path="/login"
                              element={
                                   auth.isTokenExpired(token) ?
                                        <Layout cartItems={data}>
                                             <Login />
                                        </Layout>
                                   : <Navigate to="/"/>
                              }
                         />
                         <Route
                              path="/register"
                              element={
                                   auth.isTokenExpired(token) ? 
                                        <Layout cartItems={data}>
                                             <Register />
                                        </Layout>
                                        : <Navigate to="/" />
                                   
                              }
                         />
                         <Route
                              path="/recover"
                              element={
                                   <Layout cartItems={data}>
                                        <Recover />
                                   </Layout>
                              }
                         />
                         <Route
                              path="/reset-password/:userId"
                              element={
                                   <Layout cartItems={data}>
                                        <ResetPassword />
                                   </Layout>
                              }
                         />
                         <Route
                              path="/products"
                              element={
                                   <Layout cartItems={data}>
                                        <Products
                                             products={products ?? []}
                                             getCartItems={getCartItems}
                                             getProducts={getProducts}
                                        />
                                   </Layout>
                              }
                         />
                         <Route
                              path="/products/:productId"
                              element={
                                   <Layout cartItems={data}>
                                        <ProductDetails
                                             products={products ?? []}
                                             getCartItems={getCartItems}
                                        />
                                   </Layout>
                              }
                         />
                         <Route
                              path="/cart"
                              element={
                                   <Layout cartItems={data}>
                                        <Cart
                                             cartItems={data ?? []}
                                             getCartItems={getCartItems}
                                             setICartItems={setData}
                                        />
                                   </Layout>
                              }
                         />
                          <Route
                              path="/profile"
                              element={
                                   <Layout cartItems={data}>
                                        <UserProfile
                                         />
                                   </Layout>
                              }
                         />
                         <Route
                              path="/distributor"
                              element={
                                   <Layout cartItems={data}>
                                        <Distributor />
                                   </Layout>
                              }
                         />
                         <Route
                              path="/admin"
                              element={
                                   auth.isTokenExpired(token) ? (
                                        <Navigate to={"/login"} />
                                   ) : (
                                        <AdminApp />
                                   )
                              }
                         />
                         <Route path="/*" element={<NoPage />} />
                    </Routes>
                    <BackTop />
               </div>
          </>
     );
};

export default App;
