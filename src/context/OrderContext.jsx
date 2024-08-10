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

const OrderContext = createContext();

export const useOrders = () => {
     return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");
     const url = `${env.ORDERS_URL}`;

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
                    setError("Failed to fetch orders");
               }
          } catch (error) {
               setError(error.message || "An error occurred");
          } finally {
               setIsLoading(false);
          }
     }, []);

     useEffect(() => {
          fetchData();
     }, [fetchData]);

     return (
          <OrderContext.Provider
               value={{
                    data,
                    error,
                    isLoading,
                    fetchData,
               }}
          >
               {children}
          </OrderContext.Provider>
     );
};
