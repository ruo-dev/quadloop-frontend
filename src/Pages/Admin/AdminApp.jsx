import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function AdminApp() {
     return (
          <>
               <div className="min-h-screen flex">
                    <Sidebar />
                    <div className="flex-1 p-10">
                         <Outlet />
                    </div>
               </div>
          </>
     );
}

export default AdminApp;
