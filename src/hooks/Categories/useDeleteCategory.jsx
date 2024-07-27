import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useDeleteCategory() {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");

     const deleteCategory = useCallback(
          async (itemId) => {
               const toastId = toast.loading("Deleting category...");
               try {
                    const url = `${env.CATEGORIES_URL}/${itemId}`;

                    const {
                         data: { data },
                         status,
                    } = await api().delete(url, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });

                    if (status !== 200)
                         throw new Error("Failed to delete category");

                    toast.update(toastId, {
                         render: "Success: category deleted!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    toast.update(toastId, {
                         render: "Failed: Delete category!",
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    console.error("Delete category error:", error);
                    return false;
               }
          },
          [env.CATEGORIES_URL, token]
     );

     return {
          deleteCategory,
     };
}
