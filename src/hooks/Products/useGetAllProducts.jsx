import { useState, useEffect } from "react";
import api from "../../utils/api";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useGetAllProducts({
     category = "",
     offset = 0,
     limit = 10,
} = {}) {
     const env = defaultEnvOptions();
     const url = `${env.PRODUCTS_URL}`;

     const [data, setData] = useState([]);
     const [error, setError] = useState(null);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
          const fetchData = async () => {
               setIsLoading(true);
               try {
                    const response = await api().get(url);
                    if (response.status === 200) {
                         setData(response.data.data);
                    } else {
                         setError("Failed to fetch data");
                    }
               } catch (error) {
                    setError(error);
               } finally {
                    setIsLoading(false);
               }
          };

          fetchData();
     }, [url]);

     return {
          data,
          error,
          isLoading,
     };
}
