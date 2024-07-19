import React from "react";
import { Navbar } from "./components/common/Navbar";
import Table from "./components/OrderTable";

const Dashboard = () => {
     return (
          <main className="">
               <section className="flex gap-2 my-4">
                    <div className="border h-[300px] bg-white flex-[3] rounded"></div>
                    <div className="border flex-[2] bg-white rounded"></div>
               </section>

               <section className="flex gap-2 my-4">
                    <div className="border h-[200px] bg-white flex-1 rounded"></div>
                    <div className="border flex-1 bg-white rounded"></div>
               </section>
               <Table />
          </main>
     );
};

export default Dashboard;
