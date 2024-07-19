import { useState, useEffect, useCallback } from "react";
import api from "../../utils/api";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import Cookies from "js-cookie";

export default function useGetAllCategories({
     category = "",
     offset = 0,
     limit = 10,
} = {}) {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");
     const url = `${env.CATEGORIES_URL}`;

     const [data, setData] = useState([]);
     const [error, setError] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

     const fetchData = useCallback(async () => {
          setIsLoading(true);
          try {
               const response = await api().get(url);
               if (response.status === 200) {
                    setData(response.data.data);
               } else {
                    setError("Failed to fetch categories");
               }
          } catch (error) {
               setError(error.message || "An error occurred");
          } finally {
               setIsLoading(false);
          }
     }, [url, token]);

     useEffect(() => {
          fetchData();
     }, [fetchData]);

     return {
          data,
          error,
          isLoading,
          fetchData,
          setData,
     };
}
