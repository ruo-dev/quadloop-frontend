import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../utils/api";
import { defaultEnvOptions } from "../utils/defaultEnvOptions";
import Cookies from "js-cookie";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
     const [users, setUsers] = useState([]);
     const [error, setError] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
          const fetchUsers = async () => {
               setIsLoading(true);
               const env = defaultEnvOptions();
               const url = `${env.USERS_URL}`;
               const token = Cookies.get("jwt");

               try {
                    const response = await api().get(url, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });

                    if (response.status === 200) {
                         setUsers(response.data.data);
                    } else {
                         setError("Failed to fetch data");
                    }
               } catch (error) {
                    setError(error);
               } finally {
                    setIsLoading(false);
               }
          };

          fetchUsers();
     }, []);

     return (
          <UserContext.Provider value={{ users, error, isLoading }}>
               {children}
          </UserContext.Provider>
     );
};

export const useUsers = () => {
     return useContext(UserContext);
};
