import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useDeleteProduct() {
     const env = defaultEnvOptions();

     const deleteProduct = useCallback(
          async (itemId) => {
               const toastId = toast.loading("Deleting product item...");
               try {
                    const url = `${env.PRODUCTS_URL}/${itemId}`;

                    const { status } = await api().delete(url);

                    if (status !== 200)
                         throw new Error("Failed to delete product item");

                    toast.update(toastId, {
                         render: "Success: product item deleted!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    toast.update(toastId, {
                         render: "Failed: Delete product item!",
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    console.error("Delete product item error:", error);
                    return false;
               }
          },
          [env.PRODUCTS_URL]
     );

     return {
          deleteProduct,
     };
}
