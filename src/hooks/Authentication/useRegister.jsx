import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
     const env = defaultEnvOptions();
     const navigate = useNavigate();

     const register = useCallback(async (payload) => {
          const toastId = toast.loading("setting site data...");

          try {
               const url = `${env.AUTHENTICATION_URL}/register`;

               const {
                    data: { data },
                    status,
               } = await api().post(url, payload);
               if (status !== 201 || !data) throw Error();
               navigate("/login");
               toast.update(toastId, {
                    render: "changes saved!",
                    type: "success",
                    isLoading: false,
                    autoClose: 3000,
               });
               return data;
          } catch (error) {
               console.log("error", error.response.data);
               toast.update(toastId, {
                    render: "failed! " + error.response.data.message,
                    type: "error",
                    isLoading: false,
                    autoClose: 3000,
               });
               return null;
          }
     }, []);

     return {
          register,
     };
}
