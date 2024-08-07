import { useState, useEffect, useCallback } from "react";
import api from "../../utils/api";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import Cookies from "js-cookie";

export default function useGetAllRewards({
     category = "",
     offset = 0,
     limit = 10,
} = {}) {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");
     const url = `${env.REWARDS_URL}`;

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
                    setError("Failed to fetch rewards");
               }
          } catch (error) {
               setError(error.message || "An error occurred");
          } finally {
               setIsLoading(false);
          }
     }, [url]);

     console.log("data: ", data);

     useEffect(() => {
          fetchData();
     }, [fetchData]);

     return {
          data,
          error,
          isLoading,
          fetchData,
     };
}
