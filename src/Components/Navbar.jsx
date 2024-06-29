import React, { useEffect, useState } from "react";
import { Logo } from "../Assets";
import ButtonYellow from "./ButtonYellow";
import { Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../hooks/Authentication";
import useGetAllCartItems from "../hooks/Cart/useGetAllCartItems";
import { useRefresh } from "../context/RefreshProvider";
const Navbar = () => {
     const [state, setState] = useState(false);
     const { token, logout } = useAuth();
     const { data } = useGetAllCartItems();

     const navigation = [
          { title: "Home", path: "../" },
          { title: "About", path: "../#about" },
          { title: "Solutions", path: "../#solutions" },
          { title: "Impacts", path: "../#impacts" },
          { title: "News", path: "../#news" },
          { title: "Partners", path: "../#partners" },
          { title: "Contact", path: "../#contact" },
     ];

     return (
          <>
               <nav className="bg-opacity-0 -mb-32 w-full md:static md:border-none py-4 bg-white">
                    <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                         <div className="flex items-center justify-between py-3 md:py-5 md:block">
                              <Link to={"../"}>
                                   <img src={Logo} width={200} alt="Quadloop" />
                              </Link>
                              <div className="md:hidden">
                                   <button
                                        className="text-gray-500 hover:text-gray-500"
                                        onClick={() => setState(!state)}
                                   >
                                        {state ? (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  className="h-8 w-8"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                             >
                                                  <path
                                                       fillRule="evenodd"
                                                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                       clipRule="evenodd"
                                                  />
                                             </svg>
                                        ) : (
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  strokeWidth={1.5}
                                                  stroke="currentColor"
                                                  className="w-8 h-8"
                                             >
                                                  <path
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                                  />
                                             </svg>
                                        )}
                                   </button>
                              </div>
                         </div>
                         <div
                              className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                   state ? "block" : "hidden"
                              }`}
                         >
                              <ul className="md:justify-end items-start gap-3 flex flex-col md:flex-row md:items-center h-full">
                                   {navigation.map((item, idx) => {
                                        return (
                                             <li
                                                  key={idx.toString()}
                                                  className="text-gray-800 hover:text-gray-800 hover:border-b-2 hover:font-bold"
                                             >
                                                  <HashLink
                                                       smooth
                                                       to={item.path}
                                                       className="block"
                                                  >
                                                       {item.title}
                                                  </HashLink>
                                             </li>
                                        );
                                   })}
                                   <li className="my-3">
                                        <Link
                                             to={"../cart"}
                                             className="inline-block relative"
                                        >
                                             <Cart
                                                  style={{
                                                       fontSize: "1rem",
                                                  }}
                                             />
                                             {data?.length > 0 && (
                                                  <small className="absolute text-white h-[15px] w-[15px] grid place-items-center font-bold top-[-10px] right-[-5px] rounded-full bg-red-500">
                                                       {data?.length}
                                                  </small>
                                             )}
                                        </Link>
                                   </li>
                                   <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
                                   <div className="space-y-3 items-center gap-x-2 md:flex md:space-y-0">
                                        {!token ? (
                                             <>
                                                  <li>
                                                       <ButtonYellow
                                                            link="../products"
                                                            text="Shop"
                                                       />
                                                  </li>
                                                  <li>
                                                       <ButtonYellow
                                                            link="../login"
                                                            text="Login"
                                                       />
                                                  </li>
                                             </>
                                        ) : (
                                             <li>
                                                  <ButtonYellow
                                                       link="../"
                                                       text="Logout"
                                                       onClick={logout}
                                                  />
                                             </li>
                                        )}
                                   </div>
                              </ul>
                         </div>
                    </div>
               </nav>
          </>
     );
};

export default Navbar;
