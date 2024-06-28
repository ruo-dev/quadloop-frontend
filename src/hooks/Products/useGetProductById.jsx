import useSWR from "swr";
import api from "../../utils/api";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useGetProductById({ id }) {
     const env = defaultEnvOptions();
     const url = `${env.PRODUCTS_URL}/${id}`;

     const fetcher = (url) =>
          api()
               .get(url)
               .then(({ data }) => data.data);

     const { data: product, error } = useSWR(url, fetcher);

     console.log("error", error);

     return {
          product,
          isLoading: !error && !product,
          isError: error,
     };
}
