import React from "react";
import { CiSearch } from "react-icons/ci";

export const Navbar = () => {
     return (
          <nav className=" h-[65px] bg-white rounded flex items-center justify-between">
               <div className="flex items-center gap-2 p-2">
                    <input
                         className="p-2 bg-gray-300 rounded-md placeholder:text-sm"
                         type="text"
                         placeholder="Search"
                    />
                    <button className="p-2 bg-blue-600 rounded-md">
                         <CiSearch className="text-2xl font-extrabold text-white" />
                    </button>
               </div>
               <div></div>
          </nav>
     );
};
