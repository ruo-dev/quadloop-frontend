import React from "react";
import Table from "./components/OrderTable";
import LineChart from "./components/charts/LineChart";
import PieChart from "./components/charts/PieChart";
import { useOrders } from "../../context/OrderContext";
import { useAnalytics } from "../../context/AnalyticsContext";

const Dashboard = () => {
     const { data: orders } = useOrders();
     const { data: analytics } = useAnalytics();
     console.log("orders: ", orders);
     console.log("analytics: ", analytics.totalOrderAmountPerMonth);

     return (
          <main className="">
               <section className="grid grid-cols-1 gap-4 my-3">
                    <header className="flex gap-3 items-center justify-between">
                         <div className="bg-white flex-1 p-4 rounded-lg shadow">
                              <h2 className="text-xl font-bold">
                                   Total Revenue
                              </h2>
                              <p className="text-gray-600">
                                   N {analytics?.totalRevenue}
                              </p>
                         </div>
                         <div className="bg-white flex-1 p-4 rounded-lg shadow">
                              <h2 className="text-xl font-bold">
                                   Total products
                              </h2>
                              <p className="text-gray-600">
                                   {analytics?.productCount ?? 5}
                              </p>
                         </div>
                         <div className="bg-white flex-1 p-4 rounded-lg shadow">
                              <h2 className="text-xl font-bold">
                                   Total Orders
                              </h2>
                              <p className="text-gray-600">
                                   {analytics?.orderCount ?? 30}
                              </p>
                         </div>
                         <div className="bg-white flex-1 p-4 rounded-lg shadow">
                              <h2 className="text-xl font-bold">Total Users</h2>
                              <p className="text-gray-600">
                                   {analytics?.userCount ?? 10}
                              </p>
                         </div>
                    </header>
                    <section className="flex gap-4">
                         <div className="flex-[3] bg-white p-4 rounded-lg shadow">
                              {/* Line chart */}
                              <LineChart
                                   data={
                                        analytics.totalOrderAmountPerMonth ?? []
                                   }
                              />
                         </div>
                         <div className="flex-[2] bg-white p-4 rounded-lg shadow">
                              {/* Pie chart */}
                              <PieChart
                                   data={analytics?.totalOrderPerDay ?? []}
                              />
                         </div>
                    </section>
               </section>
               <Table orders={orders} />
          </main>
     );
};

export default Dashboard;
