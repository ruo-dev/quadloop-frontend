import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import api from "../utils/api";
import { defaultEnvOptions } from "../utils/defaultEnvOptions";
import Loader from "../Components/Loader";

const ProductsContext = createContext(null);

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const env = defaultEnvOptions();
  const url = `${env.PRODUCTS_URL}`;

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
        setError("Failed to fetch data");
      }
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ProductsContext.Provider
      value={{ data, error, isLoading, fetchData, setData }}
    >
      {isLoading ? <Loader /> : children}
    </ProductsContext.Provider>
  );
};
