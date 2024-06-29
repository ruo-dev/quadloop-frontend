import { useCallback } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../Authentication";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";

export default function useCheckoutPayment() {
     const { token } = useAuth();
     const env = defaultEnvOptions();
     const handlePaystackPayment = useCallback(
          async ({ email, amount, items_id }) => {
               const toastId = toast.loading("Initializing payment...");
               const url = `${env.PAYMENT_URL}/paystack/pay`;
               try {
                    const response = await axios.post(
                         url,
                         { email, amount, items_id },
                         {
                              headers: {
                                   Authorization: `Bearer ${token}`,
                              },
                         }
                    );

                    toast.update(toastId, {
                         render: "Redirecting to Paystack...",
                         type: "success",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    return response.data.data.data;
               } catch (error) {
                    toast.update(toastId, {
                         render: "Payment initialization error!",
                         type: "error",
                         isLoading: false,
                         autoClose: 3000,
                    });
                    console.error("Payment initialization error:", error);
               }
          },
          [token]
     );

     return {
          handlePaystackPayment,
     };
}
