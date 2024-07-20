import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import useDeleteProduct from "../../../hooks/Products/useDeleteProduct";
import { useProducts } from "../../../context/ProductContext";

const ProductTable = ({ products }) => {
     const { deleteProduct } = useDeleteProduct();
     const { fetchData: getProducts } = useProducts();

     const handleDeleteProduct = async (productId) => {
          try {
               const result = await deleteProduct(productId);
               if (result) {
                    getProducts();
               }
          } catch (error) {
               console.error("error", error.message);
          }
     };
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
                                        <button className=" py-1 px-3 rounded text-xs">
                                             <MdEdit />
                                        </button>
                                        <button
                                             onClick={() => {
                                                  handleDeleteProduct(
                                                       product.id
                                                  );
                                             }}
                                             className="bg-red-500 text-white py-1 px-3 rounded text-xs ml-2"
                                        >
                                             <RiDeleteBinLine />
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
