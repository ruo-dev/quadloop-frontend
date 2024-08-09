import React from "react";

function Table({ orders = [] }) {
     const data = orders.map((order) => {
          return {
               id: order.id ?? 1,
               date: order.order_date ?? "2023-01-01",
               status: order.status ?? "Pending",
               price: order.total_amount ?? "$10",
               customer:
                    `${order.user.first_name + " " + order.user.last_name}` ??
                    "Customer A",
          };
     });
     return (
          <div className="overflow-x-auto">
               <h2 className="text-3xl text-gray-600 my-3">Recent Orders</h2>
               <table className="min-w-full bg-white">
                    <thead>
                         <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">ID</th>
                              <th className="py-3 px-6 text-left">Date</th>
                              <th className="py-3 px-6 text-left">Status</th>
                              <th className="py-3 px-6 text-left">Price</th>
                              <th className="py-3 px-6 text-left">Customer</th>
                         </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                         {data.map((row, index) => (
                              <tr
                                   key={index}
                                   className="border-b border-gray-200 hover:bg-gray-100"
                              >
                                   <td className="py-3 px-6 text-left whitespace-nowrap">
                                        {row.id ?? 1}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {row.date}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {row.status}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {row.price}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {row.customer}
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
}

export default Table;
