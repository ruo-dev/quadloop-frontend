// src/hooks/Cart/useDeleteCartItem.js
import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { mutate } from "swr";
import Cookies from "js-cookie";

export default function useDeleteCartItem() {
     const token = Cookies.get("jwt");
     const deleteCartItem = useCallback(async (itemId) => {
          const toastId = toast.loading("Deleting cart item...");
          try {
               const url = `${env.CART_URL}/${itemId}`;

               const { status } = await api().delete(url, {
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
               });

               if (status !== 200) throw Error("");
               mutate(url);

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
               return false;
          }
     }, []);

     return {
          deleteCartItem,
     };
}
