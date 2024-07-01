import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import { mutate } from "swr";
import Cookies from "js-cookie";

export default function useAddToCart() {
     const env = defaultEnvOptions();

     const token = Cookies.get("jwt");

     const addToCart = useCallback(async (payload) => {
          const toastId = toast.loading("setting site data...");
          try {
               const url = `${env.CART_URL}`;

               const {
                    data: { data },
                    status,
               } = await api().post(url, payload, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });
               if (status !== 201) throw Error("");
               mutate(url);
               toast.update(toastId, {
                    render: "success: added to cart!",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
               });
               return data;
          } catch (error) {
               toast.update(toastId, {
                    render: "failed: Added to cart!",
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
               });
               return null;
          }
     }, []);

     return {
          addToCart,
     };
}
