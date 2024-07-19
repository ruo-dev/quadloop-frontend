import React from "react";

function Table() {
     const data = [
          {
               id: 1,
               product: "Product A",
               date: "2023-01-01",
               status: "Pending",
               price: "$10",
               customer: "Customer A",
          },
          {
               id: 2,
               product: "Product B",
               date: "2023-02-01",
               status: "Shipped",
               price: "$20",
               customer: "Customer B",
          },
          {
               id: 3,
               product: "Product C",
               date: "2023-03-01",
               status: "Delivered",
               price: "$30",
               customer: "Customer C",
          },
     ];

     return (
          <div className="overflow-x-auto">
               <table className="min-w-full bg-white">
                    <thead>
                         <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">ID</th>
                              <th className="py-3 px-6 text-left">Product</th>
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
                                        {row.id}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {row.product}
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
