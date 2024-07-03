import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { BackTop } from "antd";
import { Cart, Home, NoPage, Products } from "./Pages";
import { Navbar, Footer } from "./Components";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Recover from "./Pages/Recover";
import { ProductDetails } from "./Pages/Product";
import Cookies from "js-cookie";
import { useAuthContext } from "./context/AuthContext";
import useGetAllCartItems from "./hooks/Cart/useGetAllCartItems";
import useGetAllProducts from "./hooks/Products/useGetAllProducts";

const App = () => {
     const token = Cookies.get("jwt");
     const auth = useAuthContext();
     const { data, fetchData, setData } = useGetAllCartItems();
     const { data: products } = useGetAllProducts();

     return (
          <>
               <div className=" bg-white ">
                    <>
                         <Navbar
                              cartItems={data ?? []}
                              getCartItems={fetchData}
                         />
                    </>
                    <Routes>
                         <Route
                              path="/"
                              element={<Home products={products ?? []} />}
                         />
                         <Route
                              path="/login"
                              element={
                                   auth.isTokenExpired(token) ? (
                                        <Login />
                                   ) : (
                                        <Navigate to={"/"} />
                                   )
                              }
                         />
                         <Route
                              path="/register"
                              element={
                                   auth.isTokenExpired(token) ? (
                                        <Register />
                                   ) : (
                                        <Navigate to={"/"} />
                                   )
                              }
                         />
                         <Route path="/recover" element={<Recover />} />
                         <Route
                              path="/products"
                              element={
                                   <Products
                                        products={products ?? []}
                                        getCartItems={fetchData}
                                   />
                              }
                         />
                         <Route
                              path="/products/:productId"
                              element={
                                   <ProductDetails
                                        products={products ?? []}
                                        getCartItems={fetchData}
                                   />
                              }
                         />
                         <Route
                              path="/cart"
                              element={
                                   <>
                                        <Cart
                                             cartItems={data ?? []}
                                             getCartItems={fetchData}
                                             setICartItems={setData}
                                        />
                                   </>
                              }
                         />
                         <Route path="/*" element={<NoPage />} />
                    </Routes>
                    <Footer />
                    <BackTop />
               </div>
          </>
     );
};

export default App;
