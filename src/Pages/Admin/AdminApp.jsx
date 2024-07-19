import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function AdminApp({ categories, products, getProducts }) {
     return (
          <>
               <div className="min-h-screen flex overflow-hidden">
                    <Sidebar />
                    <div className="ml-64 flex-1 overflow-y-auto p-4 bg-gray-300">
                         <Content
                              categories={categories}
                              products={products}
                              getProducts={getProducts}
                         />
                    </div>
               </div>
          </>
     );
}

export default AdminApp;
