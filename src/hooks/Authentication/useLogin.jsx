import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useLogin() {
     const env = defaultEnvOptions();

     const login = useCallback(async (payload) => {
          const toastId = toast.loading("setting site data...");

          try {
               const url = `${env.AUTHENTICATION_URL}/login`;

               const {
                    data: { data },
                    status,
               } = await api().post(url, payload);
               if (status !== 200 || !data) throw Error("");
               toast.update(toastId, {
                    render: "login success!",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
               });
               return data;
          } catch (error) {
               console.log("error", error);
               toast.update(toastId, {
                    render: "login failed! " + error?.response?.data?.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
               });
               return null;
          }
     }, []);

     return {
          login,
     };
}
