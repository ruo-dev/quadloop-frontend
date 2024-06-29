import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const RefreshContext = createContext();

// Create the provider component
export const RefreshProvider = ({ children }) => {
     const [refresh, setRefresh] = useState(0);

     // Function to toggle the refresh state
     const triggerRefresh = () => {
          setRefresh((prev) => prev + 1);
     };

     useEffect(() => {
          console.log("refreshed", refresh);
     }, [triggerRefresh]);

     return (
          <RefreshContext.Provider value={{ refresh, triggerRefresh }}>
               {children}
          </RefreshContext.Provider>
     );
};

// Custom hook to use the RefreshContext
export const useRefresh = () => {
     const { refresh, triggerRefresh } = useContext(RefreshContext);
     return { refresh, triggerRefresh };
};
