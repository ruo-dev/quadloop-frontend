import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import { mutate } from "swr";
import Cookies from "js-cookie";

export default function useUpdateCartItem() {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");
     const updateCartItem = useCallback(
          async (itemId, payload) => {
               const toastId = toast.loading("Updating cart item...");
               try {
                    const url = `${env.CART_URL}/${itemId}`;

                    const {
                         data: { data },
                         status,
                    } = await api().put(url, payload, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });

                    console.log(data);

                    if (status !== 200) throw Error("");
                    mutate(url);

                    toast.update(toastId, {
                         render: "Success: Cart item updated!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return data;
               } catch (error) {
                    toast.update(toastId, {
                         render: "Failed: Update cart item!",
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    return null;
               }
          },
          [token, env.CART_URL]
     );

     return {
          updateCartItem,
     };
}
