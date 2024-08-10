import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useAddToCart() {
     const env = defaultEnvOptions();
     const addToCart = useCallback(
          async (payload) => {
               const toastId = toast.loading("Setting site data...");
               try {
                    const url = payload.referrer
                         ? `${env.CART_URL}?referrer=${payload.referrer}`
                         : env.CART_URL;

                    const {
                         data: { data },
                         status,
                    } = await api().post(url, payload);

                    if (status !== 201)
                         throw new Error("Failed to add to cart");

                    toast.update(toastId, {
                         render: "Success: Added to cart!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    console.error(error);
                    toast.update(toastId, {
                         render: "Failed: " + error?.response?.data?.message,
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    return false;
               }
          },
          [env.CART_URL]
     );

     return {
          addToCart,
     };
}
