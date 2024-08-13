import { useState, useEffect, useCallback } from "react";
import api from "../../utils/api";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useGetProductById({ id }) {
     const env = defaultEnvOptions();
     const url = `${env.PRODUCTS_URL}/${id}`;

     const [product, setProduct] = useState(null);
     const [error, setError] = useState(null);
     const [isLoading, setIsLoading] = useState(true);
     const fetchData = useCallback(async () => {
          setIsLoading(true);
          try {
               const response = await api().get(url);
               if (response.status === 200) {
                    setProduct(response.data.data);
               } else {
                    setError("Failed to fetch product data");
               }
          } catch (error) {
               setError(error);
          } finally {
               setIsLoading(false);
          }
     }, [url]);
     useEffect(() => {
          fetchData();
     }, [fetchData]);

     return {
          product,
          isLoading,
          isError: error,
          fetchData,
     };
}
