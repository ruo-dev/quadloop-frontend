import React, {
     createContext,
     useContext,
     useState,
     useEffect,
     useCallback,
} from "react";
import { defaultEnvOptions } from "../utils/defaultEnvOptions";
import Cookies from "js-cookie";
import api from "../utils/api";

const AnalyticsContext = createContext();

export const useAnalytics = () => {
     return useContext(AnalyticsContext);
};

export const AnalyticsProvider = ({ children }) => {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");
     const url = `${env.ANALYTICS_URL}`;

     const [data, setData] = useState([]);
     const [error, setError] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

     const fetchData = useCallback(async () => {
          setIsLoading(true);
          try {
               const response = await api().get(url, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               if (response.status === 200) {
                    setData(response.data.data);
               } else {
                    setError("Failed to fetch Analyticss");
               }
          } catch (error) {
               setError(error.message || "An error occurred");
          } finally {
               setIsLoading(false);
          }
     }, [token]);

     useEffect(() => {
          fetchData();
     }, [fetchData]);

     return (
          <AnalyticsContext.Provider
               value={{
                    data,
                    error,
                    isLoading,
                    fetchData,
               }}
          >
               {children}
          </AnalyticsContext.Provider>
     );
};
