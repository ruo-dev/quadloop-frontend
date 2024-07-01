import useSWRImmutable from "swr/immutable";
import api from "../../utils/api";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import { useEffect } from "react";
import { mutate } from "swr";

export default function useGetProductById({ id }) {
     const env = defaultEnvOptions();
     const url = `${env.PRODUCTS_URL}/${id}`;

     const fetcher = (url) =>
          api()
               .get(url)
               .then(({ data }) => data.data);

     const { data: product, error } = useSWRImmutable(url, fetcher);

     console.log("error", error);

     useEffect(() => {
          if (!url) return;
          mutate(url);
     }, [url]);

     return {
          product,
          isLoading: !error && !product,
          isError: error,
     };
}
