import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import Cookies from "js-cookie";

export default function useAddProduct() {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");

     const addProduct = useCallback(
          async (payload) => {
               const toastId = toast.loading("Setting site data...");
               try {
                    const url = `${env.PRODUCTS_URL}`;

                    // Create FormData and append fields
                    const formData = new FormData();
                    formData.append("product_name", payload.product_name);
                    formData.append("product_description", payload.description);
                    formData.append("regular_price", payload.regular_price);
                    formData.append("discount_price", payload.discount_price);
                    formData.append("category_id", payload.category);
                    formData.append("quantity", payload.quantity);
                    formData.append("product_weight", payload.weight);

                    // Append tags as a comma-separated string or as an array
                    formData.append("product_tags", payload.tags.join(","));

                    // Append images
                    payload.product_images.forEach((image, index) => {
                         formData.append(`product_image`, image.file);
                    });

                    const {
                         data: { data },
                         status,
                    } = await api().post(url, formData, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                              "Content-Type": "multipart/form-data",
                         },
                    });

                    console.log(data, status);
                    if (status !== 201)
                         throw new Error("Failed to create product");

                    toast.update(toastId, {
                         render: "Success: Create product!",
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
          [env.PRODUCTS_URL, token]
     );

     return {
          addProduct,
     };
}
