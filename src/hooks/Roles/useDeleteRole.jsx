import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useDeleteRole() {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");

     const deleteRole = useCallback(
          async (itemId) => {
               const toastId = toast.loading("Deleting role...");
               try {
                    const url = `${env.ROLES_URL}/${itemId}`;

                    const {
                         data: { data },
                         status,
                    } = await api().delete(url, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });

                    if (status !== 200)
                         throw new Error("Failed to delete role");

                    toast.update(toastId, {
                         render: "Success: role deleted!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    toast.update(toastId, {
                         render:
                              "Failed: role! " + error?.response?.data?.message,
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    console.error("Delete role error:", error);
                    return false;
               }
          },
          [env.ROLES_URL, token]
     );

     return {
          deleteRole,
     };
}
