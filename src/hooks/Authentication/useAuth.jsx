import { useState, useEffect } from "react";

const useAuth = () => {
     const [user, setUser] = useState(null);
     const [token, setToken] = useState(null);

     useEffect(() => {
          // Retrieve user info and token from local storage on component mount
          const storedUser = JSON.parse(localStorage.getItem("user"));
          const storedToken = localStorage.getItem("token");

          if (storedUser) setUser(storedUser);
          if (storedToken) setToken(storedToken);
     }, []);

     const save = (userInfo, authToken) => {
          // Store user info and token in local storage
          localStorage.setItem("user", JSON.stringify(userInfo));
          localStorage.setItem("token", authToken);

          // Update state
          setUser(userInfo);
          setToken(authToken);
     };

     const logout = () => {
          // Clear user info and token from local storage
          localStorage.removeItem("user");
          localStorage.removeItem("token");

          // Update state
          setUser(null);
          setToken(null);
     };

     return { user, token, save, logout };
};

export default useAuth;
