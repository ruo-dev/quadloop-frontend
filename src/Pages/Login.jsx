import React, { useState } from "react";
import { hero } from "../Assets";
import { Link, useNavigate } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundry";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
     const { login } = useAuthContext();
     const navigate = useNavigate();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const payload = { email, password };

     const onSubmit = async (e) => {
          e.preventDefault();
          try {
               const result = await login(payload);
               console.log({result})
               if (result) {
                    if (result?.userRole?.role?.role_name === "admin") {
                         setTimeout(() => {
                              navigate("/admin?tab=dashboard");
                         }, 3000);
                    } else
                         setTimeout(() => {
                              navigate(-1);
                         }, 3000);
               }
          } catch (error) {
               console.log({ error: error });
          }
     };

     return (
          <ErrorBoundary>
               <section
                    className=" bg-no-repeat bg-cover bg-top space-y-40 pt-60 pb-10 lg:py-60 min-h-screen"
                    style={{
                         backgroundImage: `url(${hero})`,
                    }}
               >
                    <main className="w-full flex flex-col items-center justify-center px-4">
                         <div className="bg-white p-8 rounded-xl max-w-sm w-full text-gray-600 space-y-8">
                              <div className="text-center">
                                   <div className="mt-5 space-y-2">
                                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                                             Log in to your account
                                        </h3>
                                        <p className="">
                                             Don't have an account?{" "}
                                             <Link
                                                  to="../register"
                                                  className="font-medium text-teal-600 hover:text-teal-700"
                                             >
                                                  Sign up
                                             </Link>
                                        </p>
                                   </div>
                              </div>
                              <form onSubmit={onSubmit}>
                                   <div>
                                        <input
                                             value={email}
                                             onChange={(e) => {
                                                  setEmail(e.target.value);
                                             }}
                                             type="email"
                                             required
                                             placeholder="Your email"
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
                                   </div>
                                   <button className="w-full mt-4 px-4 py-2 text-white font-medium bg-teal-600 hover:bg-teal-700 active:bg-teal-600 rounded-lg duration-150">
                                        Sign in
                                   </button>
                              </form>
                              {/* <div className="relative">
                                   <span className="block w-full h-px bg-gray-300"></span>
                                   <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                                        Or continue with
                                   </p>
                              </div> */}
                              {/* <div className="space-y-4 text-sm font-medium">
                                   <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                                        <svg
                                             className="w-5 h-5"
                                             viewBox="0 0 48 48"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                        >
                                             <g clipPath="url(#clip0_17_40)">
                                                  <path
                                                       d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                                                       fill="#4285F4"
                                                  />
                                                  <path
                                                       d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                                                       fill="#34A853"
                                                  />
                                                  <path
                                                       d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                                                       fill="#FBBC04"
                                                  />
                                                  <path
                                                       d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                                                       fill="#EA4335"
                                                  />
                                             </g>
                                             <defs>
                                                  <clipPath id="clip0_17_40">
                                                       <rect
                                                            width="48"
                                                            height="48"
                                                            fill="white"
                                                       />
                                                  </clipPath>
                                             </defs>
                                        </svg>
                                        Continue with Google
                                   </button>
                              </div> */}
                              <div className="text-center">
                                   <Link
                                        to="../recover"
                                        className="text-teal-600 hover:text-teal-700"
                                   >
                                        Forgot password?
                                   </Link>
                              </div>
                         </div>
                    </main>
               </section>
          </ErrorBoundary>
     );
};

export default Login;
