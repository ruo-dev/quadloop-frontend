import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../Products";
import Dashboard from "../Dashboard";
import Users from "../Users";
import Roles from "../Roles";
import Orders from "../Orders";
import Transactions from "../Transactions";
import Analytics from "../Analytics";
import Categories from "../Categories";

const Content = ({ categories, products, getProducts }) => {
     const { search } = useLocation();
     const [tab, setTab] = useState("");
     const [action, setAction] = useState("");
     const [activeTab, setActiveTab] = useState(null);

     const Tabs = {
          products: "products",
          dashboard: "dashboard",
          analytics: "analytics",
          users: "users",
          orders: "orders",
          roles: "roles",
          transactions: "transactions",
          categories: "categories",
     };

     useEffect(() => {
          const searchParams = new URLSearchParams(search);
          for (const [key, value] of searchParams.entries()) {
               if (key.toLowerCase() === "tab") {
                    setTab(value);
               } else if (key.toLowerCase() === "action") {
                    setAction(value);
               }
          }
     }, [search]);

     useEffect(() => {
          switch (tab) {
               case "":
               case Tabs.dashboard:
                    setActiveTab(<Dashboard />);
                    break;
               case Tabs.users:
                    setActiveTab(<Users />);
                    break;
               case Tabs.roles:
                    setActiveTab(<Roles />);
                    break;
               case Tabs.categories:
                    setActiveTab(<Categories categories={categories} />);
                    break;
               case Tabs.products:
                    setActiveTab(
                         <Products
                              tab={tab}
                              action={action}
                              categories={categories}
                              products={products}
                              getProducts={getProducts}
                         />
                    );
                    break;
               case Tabs.orders:
                    setActiveTab(<Orders />);
                    break;
               case Tabs.transactions:
                    setActiveTab(<Transactions />);
                    break;
               case Tabs.analytics:
                    setActiveTab(<Analytics />);
                    break;
               default:
                    setActiveTab(<Dashboard />);
                    break;
          }
     }, [tab, action]);

     return <>{activeTab}</>;
};

export default Content;
