import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useResetPassword() {
     const env = defaultEnvOptions();
     const url = `${env.AUTHENTICATION_URL}/reset-password`;

     const resetPassword = useCallback(
          async (payload) => {
               const toastId = toast.loading("Setting site data...");
               try {
                    const {
                         data: { data },
                         status,
                    } = await api().post(url, payload);
                    console.log("data: ", data);
                    if (status !== 200) throw new Error("Failed!");

                    toast.update(toastId, {
                         render: "Success: reset password!",
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
          [url]
     );

     return {
          resetPassword,
     };
}
