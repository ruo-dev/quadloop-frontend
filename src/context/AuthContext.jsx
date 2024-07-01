import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useLogin } from "../hooks/Authentication";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const { login: loginApi } = useLogin();

     useEffect(() => {
          const token = Cookies.get("jwt");
          if (token && !isTokenExpired(token)) {
               setUser({ token });
          }
     }, []);

     const login = async ({ email, password }) => {
          try {
               const data = await loginApi({ email, password });
               if (data) {
                    Cookies.set("jwt", data.token, {
                         expires: 1 / 24,
                         path: "/",
                    });
                    setUser({ token: data.token });
                    localStorage.setItem("user", JSON.stringify(data));
               }
          } catch (error) {
               console.error("Login failed:", error);
          }
     };

     const logout = () => {
          Cookies.remove("jwt", { path: "/", expires: 1 / 24 });
          localStorage.removeItem("user");
          setUser(null);
     };

     useEffect(() => {
          console.log("Logged out!!!");
     }, [logout, user]);

     const isTokenExpired = (token) => {
          if (!token) return true;

          try {
               const { exp } = jwtDecode(token);
               return Date.now() >= exp * 1000;
          } catch (error) {
               return true;
          }
     };

     return (
          <AuthContext.Provider value={{ user, login, logout, isTokenExpired }}>
               {children}
          </AuthContext.Provider>
     );
};
