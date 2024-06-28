import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import { useAuth } from "../Authentication";
import { mutate } from "swr";

export default function useAddToCart() {
     const env = defaultEnvOptions();
     const { token } = useAuth();
     const addToCart = useCallback(
          async (payload) => {
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
          },
          [token]
     );

     return {
          addToCart,
     };
}
