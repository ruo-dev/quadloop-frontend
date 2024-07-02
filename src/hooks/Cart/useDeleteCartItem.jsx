// src/hooks/Cart/useDeleteCartItem.js
import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useDeleteCartItem() {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");

     const deleteCartItem = useCallback(
          async (itemId) => {
               const toastId = toast.loading("Deleting cart item...");
               try {
                    const url = `${env.CART_URL}/${itemId}`;

                    const { status } = await api().delete(url, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });

                    console.log({ status });

                    if (status !== 200)
                         throw new Error("Failed to delete cart item");

                    toast.update(toastId, {
                         render: "Success: Cart item deleted!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    toast.update(toastId, {
                         render: "Failed: Delete cart item!",
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    console.error("Delete cart item error:", error);
                    return false;
               }
          },
          [env.CART_URL, token]
     );

     return {
          deleteCartItem,
     };
}
