import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import Cookies from "js-cookie";

export default function useAddCategory() {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");

     const addCategory = useCallback(
          async (payload) => {
               const toastId = toast.loading("Setting site data...");
               try {
                    const url = `${env.CATEGORIES_URL}`;

                    const {
                         data: { data },
                         status,
                    } = await api().post(url, payload, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });

                    console.log(data, status);
                    if (status !== 201) throw new Error("Failed to category!");

                    toast.update(toastId, {
                         render: "Success: Added category!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    console.error(error);
                    toast.update(toastId, {
                         render: "Failed: Added category!",
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    return false;
               }
          },
          [env.CATEGORIES_URL, token]
     );

     return {
          addCategory,
     };
}
