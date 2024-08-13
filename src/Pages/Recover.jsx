import React, { useState } from "react";
import { hero } from "../Assets";
import { Link } from "react-router-dom";
import useForgotPassword from "../hooks/Authentication/useForgotPassword";
import { ToastContainer } from "react-toastify";

const Recover = () => {
     const { forgotPassword } = useForgotPassword();
     const [email, setEmail] = useState("");

     const onSubmit = async (e) => {
          e.preventDefault();
          try {
               const payload = {
                    email,
               };
               const result = await forgotPassword(payload);
               if (result) {
                    setEmail("");
               }
          } catch (error) {
               console.error("Failed to recover", error);
          }
     };
     return (
          <div>
               {/*Register*/}
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
                                             Forgot Password
                                        </h3>
                                   </div>
                              </div>
                              <form onSubmit={onSubmit}>
                                   <div>
                                        <input
                                             value={email}
                                             onChange={(e) =>
                                                  setEmail(e.target.value)
                                             }
                                             type="email"
                                             required
                                             placeholder="Your email"
                                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                                        />
                                   </div>
                                   <button className="w-full mt-4 px-4 py-2 text-white font-medium bg-teal-600 hover:bg-teal-700 active:bg-teal-600 rounded-lg duration-150">
                                        Reset
                                   </button>
                              </form>
                              <div className="relative">
                                   <span className="block w-full h-px bg-gray-300"></span>
                              </div>
                              <div className="text-center">
                                   <Link
                                        to="../login"
                                        className="text-teal-600 hover:text-teal-700"
                                   >
                                        Back to Login
                                   </Link>
                              </div>
                         </div>
                    </main>
               </section>
          </div>
     );
};

export default Recover;
