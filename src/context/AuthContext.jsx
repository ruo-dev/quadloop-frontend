import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useLogin } from "../hooks/Authentication";

const AuthContext = createContext(null);

export const useAuthContext = () => {
     return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
     const [token, setToken] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const { login: loginApi } = useLogin();

     useEffect(() => {
          const token = Cookies.get("jwt");
          if (token && !isTokenExpired(token)) {
               setToken(token);
          } else {
               setToken(null);
          }
          setIsLoading(false);
     }, []);

     const login = async ({ email, password }) => {
          try {
               const data = await loginApi({ email, password });
               if (data) {
                    Cookies.set("jwt", data.token, {
                         expires: 1 / 24,
                         path: "/",
                    });
                    setToken(data.token);
                    localStorage.setItem("user", JSON.stringify(data));
               }
               return data;
          } catch (error) {
               console.error("Login failed:", error);
               return null;
          }
     };

     const logout = () => {
          Cookies.remove("jwt", { path: "/" });
          localStorage.removeItem("user");
          setToken(null);
          window.location.reload();
     };

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
          <AuthContext.Provider
               value={{ token, login, logout, isTokenExpired }}
          >
               {children}
          </AuthContext.Provider>
     );
};
