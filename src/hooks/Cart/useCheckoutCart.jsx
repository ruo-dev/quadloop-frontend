import { useCallback } from "react";
import { toast } from "react-toastify";
import { defaultEnvOptions } from "../../utils/defaultEnvOptions";
import api from "../../utils/api";

export default function useCheckoutPayment() {
  const env = defaultEnvOptions();

  const handlePaystackPayment = useCallback(
    async (payload) => {
      const toastId = toast.loading("Initializing payment...");
      const url = `${env.PAYMENT_URL}/paystack/pay`;

      try {
        const response = await api().post(url, payload);

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
        return null;
      }
    },
    [env.PAYMENT_URL]
  );

  return {
    handlePaystackPayment,
  };
}
