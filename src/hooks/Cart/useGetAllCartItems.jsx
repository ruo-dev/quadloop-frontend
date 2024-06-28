import { useEffect } from "react";
import api from "../../utils/api";
import useSWRImmutable from "swr/immutable";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import { mutate } from "swr";
import { useAuth } from "../Authentication";

export default function useGetAllCartItems({
     category = "",
     offset = 0,
     limit = 10,
} = {}) {
     const env = defaultEnvOptions();
     const { token } = useAuth();

     //  const url = `${env.PRODUCTS_URL}?category=${category}&offset=${offset}&limit=${limit}`;
     const url = `${env.CART_URL}`;

     const fetcher = (url) =>
          api()
               .get(url, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               })
               .then(({ data, status }) => {
                    if (status !== 200 || !data) return undefined;
                    return data.data;
               });

     const { data, error } = useSWRImmutable(url, fetcher);

     const isLoading = !data && !error;

     useEffect(() => {
          if (!url) return;
          mutate(url);
     }, [url]);

     return {
          data,
          error,
          isLoading,
     };
}
