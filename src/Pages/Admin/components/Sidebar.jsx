import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
     return (
          <div className="w-64 bg-gray-800 h-screen text-white">
               <div className="p-4 text-2xl font-bold">Admin Dashboard</div>
               <nav>
                    <ul>
                         <li className="p-4 hover:bg-gray-700">
                              <Link to="/">Dashboard</Link>
                         </li>
                         <li className="p-4 hover:bg-gray-700">
                              <Link to="/users">Users</Link>
                         </li>
                         <li className="p-4 hover:bg-gray-700">
                              <Link to="/roles">Roles</Link>
                         </li>
                         <li className="p-4 hover:bg-gray-700">
                              <Link to="/products">Products</Link>
                         </li>
                         <li className="p-4 hover:bg-gray-700">
                              <Link to="/categories">Categories</Link>
                         </li>
                         <li className="p-4 hover:bg-gray-700">
                              <Link to="/orders">Orders</Link>
                         </li>
                         <li className="p-4 hover:bg-gray-700">
                              <Link to="/transactions">Transactions</Link>
                         </li>
                         <li className="p-4 hover:bg-gray-700">
                              <Link to="/analytics">Analytics</Link>
                         </li>
                    </ul>
               </nav>
          </div>
     );
};

export default Sidebar;
