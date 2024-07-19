import React from "react";
import { Link } from "react-router-dom";

// const products = [
//      {
//           id: 1,
//           product: "Product 1",
//           category: "Category 1",
//           status: "Available",
//           price: "$10",
//           rating: 4,
//      },
//      {
//           id: 2,
//           product: "Product 2",
//           category: "Category 2",
//           status: "Unavailable",
//           price: "$20",
//           rating: 3,
//      },
//      {
//           id: 3,
//           product: "Product 3",
//           category: "Category 3",
//           status: "Available",
//           price: "$30",
//           rating: 5,
//      },
//      // Add more products as needed
// ];

const ProductTable = ({ products }) => {
     console.log({ products });
     return (
          <div className="overflow-x-auto">
               <div className="flex items-center justify-between my-2">
                    <h1 className="text-xl my-3">Product List</h1>
                    <Link
                         className="py-2 px-6 bg-blue-500 text-white rounded-md"
                         to="/admin?tab=products&action=create"
                    >
                         Create
                    </Link>
               </div>

               <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                         <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">Id</th>
                              <th className="py-3 px-6 text-left">Product</th>
                              <th className="py-3 px-6 text-left">Category</th>
                              <th className="py-3 px-6 text-left">Status</th>
                              <th className="py-3 px-6 text-right">Price</th>
                              <th className="py-3 px-6 text-center">Rating</th>
                              <th className="py-3 px-6 text-center">Actions</th>
                         </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                         {products?.map((product) => (
                              <tr
                                   key={product.id}
                                   className="border-b border-gray-200 hover:bg-gray-100"
                              >
                                   <td className="py-3 px-6 text-left whitespace-nowrap">
                                        {product.id}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {product.product_name}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {product.category.category_name}
                                   </td>
                                   <td
                                        className={`py-3 px-6 text-left ${
                                             product.status === "Available"
                                                  ? "text-green-500"
                                                  : "text-red-500"
                                        }`}
                                   >
                                        {product.status}
                                   </td>
                                   <td className="py-3 px-6 text-right">
                                        {product.regular_price}
                                   </td>
                                   <td className="py-3 px-6 text-center">
                                        {product.rating}
                                   </td>
                                   <td className="py-3 px-6 text-center">
                                        <button className="bg-blue-500 text-white py-1 px-3 rounded text-xs">
                                             Edit
                                        </button>
                                        <button className="bg-red-500 text-white py-1 px-3 rounded text-xs ml-2">
                                             Delete
                                        </button>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
          </div>
     );
};

export default ProductTable;
