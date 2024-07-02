import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccessModal = () => {
     const location = useLocation();
     const queryParams = new URLSearchParams(location.search);
     const transactionId = queryParams.get("transaction_id");

     return (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
               <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">
                         Payment Successful!
                    </h2>
                    <p className="mb-4">Transaction ID: {transactionId}</p>
                    <button
                         onClick={() => {
                              // Close the modal or redirect as needed
                              // Example: window.location.href = '/cart';
                         }}
                         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                         Close
                    </button>
               </div>
          </div>
     );
};

export default PaymentSuccessModal;
