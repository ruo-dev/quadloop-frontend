import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export const Layout = ({ cartItems, children }) => {
     return (
          <div>
               <Navbar cartItems={cartItems} />
               {children}
               <Footer />
               <WhatsAppButton />
          </div>
     );
};
