import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useLogin } from "../hooks/Authentication";
import useLogout from "../hooks/Authentication/useLogout";

const AuthContext = createContext(null);

export const useAuthContext = () => {
     return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
     const [token, setToken] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const { login: loginApi } = useLogin();
     const { logout: logoutApi } = useLogout();

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
                    Cookies.set("jwt", data.accessToken);
                    Cookies.set("refreshToken", data.refreshToken);
                    setToken(data.accessToken);
                    localStorage.setItem("user", JSON.stringify(data));
               }
               return data;
          } catch (error) {
               console.error("Login failed:", error);
               return null;
          }
     };

     const logout = async () => {
          try {
               await logoutApi();
               Cookies.remove("jwt");
               localStorage.removeItem("user");
               setToken(null);
          } catch (error) {
               console.error("Logout failed:", error);
          }
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
