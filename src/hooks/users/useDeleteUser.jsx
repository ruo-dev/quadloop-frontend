// src/hooks/Cart/useDeleteRole.js
import { useCallback } from "react";
import api from "../../utils/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useDeleteUser() {
     const env = defaultEnvOptions();
     const token = Cookies.get("jwt");

     const deleteUser = useCallback(
          async (userId) => {
               const toastId = toast.loading("Deleting user...");
               try {
                    const url = `${env.USERS_URL}/${userId}`;

                    const {
                         data: { data },
                         status,
                    } = await api().delete(url, {
                         headers: {
                              Authorization: `Bearer ${token}`,
                         },
                    });

                    if (status !== 200)
                         throw new Error("Failed to delete user");

                    toast.update(toastId, {
                         render: "Success: user deleted!",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });

                    return true;
               } catch (error) {
                    toast.update(toastId, {
                         render:
                              "Failed: Delete user! " +
                              error?.response?.data?.message,
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    console.error("Delete User error:", error);
                    return false;
               }
          },
          [env.USERS_URL, token]
     );

     return {
          deleteUser,
     };
}
