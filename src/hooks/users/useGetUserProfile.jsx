import { useState, useEffect, useCallback } from "react";
import api from "../../utils/api";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import Cookies from "js-cookie";

export default function useGetUserProfile() {
  const env = defaultEnvOptions();
  const url = `${env.USERS_URL}/profile`;
  const token = Cookies.get("jwt");

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api().get(url);
      if (response.status === 200) {
        setUser(response.data.data);
      } else {
        setError("Failed to fetch user data");
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
    user,
    isLoading,
    isError: error,
    fetchData,
  };
}
