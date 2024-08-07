import React, { useState } from "react";
import { hero } from "../Assets";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "../Components/ErrorBoundry";
import { useParams } from "react-router-dom";
import useResetPassword from "../hooks/Authentication/useResetPassword";
import useResendCode from "../hooks/Authentication/useResendCode";

const ResetPassword = () => {
     const { resetPassword } = useResetPassword();
     const { resendCode } = useResendCode();
     const params = useParams();
     const [code, setCode] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");

     const onResendCode = async (e) => {
          e.preventDefault();
          try {
               const payload = {
                    userId: params.userId,
                    type: "reset",
               };
               await resendCode(payload);
               return;
          } catch (error) {
               console.log("error", error);
          }
     };

     const onSubmit = async (e) => {
          e.preventDefault();
          try {
               const payload = {
                    userId: params.userId,
                    code,
                    password,
                    confirmPassword,
               };
               const result = await resetPassword(payload);
               if (result) {
                    setCode("");
                    setPassword("");
                    setConfirmPassword("");
               }
          } catch (error) {
               console.log("error", error);
          }
     };
     return (
          <ErrorBoundary>
               <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
               />
               <section
                    className=" bg-no-repeat bg-cover bg-top space-y-40 pt-60 pb-10 lg:py-60 "
                    style={{
                         backgroundImage: `url(${hero})`,
                    }}
               >
                    <main className="w-full flex flex-col items-center justify-center px-4">
                         <div className="bg-white p-8 rounded-xl max-w-sm w-full text-gray-600 space-y-8">
                              <div className="text-center">
                                   <div className="mt-5 space-y-2">
                                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                                             Reset Account Password
                                        </h3>
                                   </div>
                              </div>
                              <form onSubmit={onSubmit}>
                                   <div>
                                        <input
                                             value={code}
                                             onChange={(e) => {
                                                  setCode(e.target.value);
                                             }}
                                             type="test"
                                             required
                                             placeholder="Your Otp Code"
                                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                                        />

                                        <input
                                             value={password}
                                             onChange={(e) => {
                                                  setPassword(e.target.value);
                                             }}
                                             type="password"
                                             required
                                             placeholder="Your Password"
                                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                                        />

                                        <input
                                             value={confirmPassword}
                                             onChange={(e) => {
                                                  setConfirmPassword(
                                                       e.target.value
                                                  );
                                             }}
                                             type="password"
                                             required
                                             placeholder="Confirm Password"
                                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                                        />
                                   </div>
                                   <button className="w-full mt-4 px-4 py-2 text-white font-medium bg-teal-600 hover:bg-teal-700 active:bg-teal-600 rounded-lg duration-150">
                                        Reset Password
                                   </button>
                                   <button
                                        type="button"
                                        onClick={onResendCode}
                                        className="w-full mt-4 px-4 py-2 text-white font-medium bg-teal-600 hover:bg-teal-700 active:bg-teal-600 rounded-lg duration-150"
                                   >
                                        Resend Code
                                   </button>
                              </form>
                         </div>
                    </main>
               </section>
          </ErrorBoundary>
     );
};

export default ResetPassword;
