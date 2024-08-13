import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useLogout() {
     const env = defaultEnvOptions();

     const logout = useCallback(async () => {
          const toastId = toast.loading("setting site data...");

          try {
               const url = `${env.AUTHENTICATION_URL}/logout`;

               const {
                    data: { data },
                    status,
               } = await api().get(url);
               if (status !== 200) throw Error("");
               toast.update(toastId, {
                    render: "logout success!",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
               });
               return data;
          } catch (error) {
               console.log("error", error);
               toast.update(toastId, {
                    render: "logout failed! " + error?.response?.data?.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
               });
               return null;
          }
     }, []);

     return {
          logout,
     };
}
