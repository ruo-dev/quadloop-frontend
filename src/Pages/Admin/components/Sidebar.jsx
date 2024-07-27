import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const Sidebar = () => {
     const { logout } = useAuthContext();
     return (
          <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4">
               <Link
                    to="/"
                    className="cursor-pointer block p-4 text-2xl font-bold"
               >
                    QuadLoop
               </Link>
               <nav>
                    <ul>
                         <li className="hover:bg-gray-700">
                              <Link
                                   className="w-full h-full block p-4"
                                   to="/admin?tab="
                              >
                                   Home
                              </Link>
                         </li>
                         <li className="hover:bg-gray-700">
                              <Link
                                   className="w-full h-full block p-4"
                                   to="/admin?tab=users&action=list"
                              >
                                   Users
                              </Link>
                         </li>
                         <li className="hover:bg-gray-700">
                              <Link
                                   className="w-full h-full block p-4"
                                   to="/admin?tab=roles&action=list"
                              >
                                   Roles
                              </Link>
                         </li>
                         <li className="hover:bg-gray-700">
                              <Link
                                   className="w-full h-full block p-4"
                                   to="/admin?tab=products&action=list"
                              >
                                   Products
                              </Link>
                         </li>
                         <li className="hover:bg-gray-700">
                              <Link
                                   className="w-full h-full block p-4"
                                   to="/admin?tab=categories&action=list"
                              >
                                   Categories
                              </Link>
                         </li>
                         {/* <li className="hover:bg-gray-700">
                              <Link
                                   className="w-full h-full block p-4"
                                   to="/admin?tab=orders&action=list"
                              >
                                   Orders
                              </Link>
                         </li>
                          <li className="hover:bg-gray-700">
                              <Link
                                   className="w-full h-full block p-4"
                                   to="/admin?tab=transactions&action=list"
                              >
                                   Transactions
                              </Link>
                         </li>
                         <li className="hover:bg-gray-700">
                              <Link
                                   className="w-full h-full block p-4"
                                   to="/admin?tab=analytics&action=list"
                              >
                                   Analytics
                              </Link>
                         </li> */}
                         <li className="hover:bg-gray-700">
                              <Link
                                   className="w-full h-full block p-4"
                                   to="/admin"
                                   onClick={logout}
                              >
                                   Log out
                              </Link>
                         </li>
                    </ul>
               </nav>
          </div>
     );
};

export default Sidebar;
