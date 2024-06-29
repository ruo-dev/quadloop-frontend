import { useState, useEffect } from "react";

const useAuth = () => {
     const [user, setUser] = useState(null);

     useEffect(() => {
          // Retrieve user info and token from local storage on component mount
          const storedUser = JSON.parse(localStorage.getItem("user"));
          if (storedUser) setUser(storedUser);
     }, []);

     const save = (userInfo, authToken) => {
          // Store user info and token in local storage
          localStorage.setItem("user", JSON.stringify(userInfo));

          // Update state
          setUser(userInfo);
     };

     const logout = () => {
          // Clear user info and token from local storage
          const storedUser = JSON.parse(localStorage.getItem("user"));
          if (storedUser) {
               localStorage.removeItem("user");
          }

          // Update state
          setUser(null);
     };

     return { user, token: user?.token, save, logout };
};

export default useAuth;
