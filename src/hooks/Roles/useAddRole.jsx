import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import Cookies from "js-cookie";

export default function useAddRole() {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");

     const addRole = useCallback(
          async (payload) => {
               const toastId = toast.loading("Setting site data...");
               try {
                    const url = `${env.ROLES_URL}`;

                    const {
                         data: { data },
                         status,
                    } = await api().post(url, payload, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });

                    console.log(data, status);
                    if (status !== 201) throw new Error("Failed to role!");

                    toast.update(toastId, {
                         render: "Success: Added role!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    console.error(error);
                    toast.update(toastId, {
                         render: "Failed: Added role!",
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    return false;
               }
          },
          [env.ROLES_URL, token]
     );

     return {
          addRole,
     };
}
