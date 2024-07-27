import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import useGetAllRoles from "../../hooks/Roles/useGetAllRoles";

function AdminApp({ categories, products, getProducts }) {
     const { data: roles, fetchData: getRoles } = useGetAllRoles();

     return (
          <>
               <div className="min-h-screen flex overflow-hidden">
                    <Sidebar />
                    <div className="ml-64 flex-1 overflow-y-auto p-4 bg-gray-300">
                         <Content
                              categories={categories}
                              products={products}
                              getProducts={getProducts}
                              roles={roles}
                              getRoles={getRoles}
                         />
                    </div>
               </div>
          </>
     );
}

export default AdminApp;
