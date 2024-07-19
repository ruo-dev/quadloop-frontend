import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ cartItems, children }) => {
     return (
          <div>
               <Navbar cartItems={cartItems} />
               {children}
               <Footer />
          </div>
     );
};
