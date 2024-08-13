import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useCreateUser() {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");

     const createUser = useCallback(
          async (payload) => {
               const toastId = toast.loading("Setting site data...");
               try {
                    const url = `${env.USERS_URL}`;

                    const {
                         data: { data },
                         status,
                    } = await api().post(url, payload, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });

                    console.log(data, status);
                    if (status !== 201) throw new Error("Failed to user!");

                    toast.update(toastId, {
                         render: "Success: Added user!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    console.error(error);
                    toast.update(toastId, {
                         render: "Failed: Added user!",
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    return false;
               }
          },
          [env.USERS_URL, token]
     );

     return {
          createUser,
     };
}
