import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useForgotPassword() {
     const env = defaultEnvOptions();
     const url = `${env.AUTHENTICATION_URL}/forgot-password`;

     const forgotPassword = useCallback(
          async (payload) => {
               const toastId = toast.loading("Setting site data...");
               try {
                    const {
                         data: { data },
                         status,
                    } = await api().post(url, payload);

                    if (status !== 200) throw new Error("Failed!");

                    toast.update(toastId, {
                         render: "Success: forgot password!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    console.error(error);
                    toast.update(toastId, {
                         render: "Failed: forgot password!",
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    return false;
               }
          },
          [url]
     );

     return {
          forgotPassword,
     };
}
