import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const RoleTable = ({ roles, handleDeleteRole }) => {
     return (
          <div className="overflow-x-auto">
               <div className="flex items-center justify-between my-2">
                    <h1 className="text-xl my-3">Role List</h1>
                    <Link
                         className="py-2 px-6 bg-blue-500 text-white rounded-md"
                         to="/admin?tab=roles&action=create"
                    >
                         Create
                    </Link>
               </div>

               <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                         <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">Role Name</th>
                              <th className="py-3 px-6 text-left">
                                   Description
                              </th>
                              <th className="py-3 px-6 text-center">Actions</th>
                         </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                         {roles?.map((role) => (
                              <tr
                                   key={role.id}
                                   className="border-b border-gray-200 hover:bg-gray-100"
                              >
                                   <td className="py-3 px-6 text-left whitespace-nowrap">
                                        {role.role_name}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {role.description}
                                   </td>
                                   <td className="py-3 px-6 text-center">
                                        <button className="py-1 px-3 rounded text-xs">
                                             <MdEdit />
                                        </button>
                                        <button
                                             onClick={() =>
                                                  handleDeleteRole(role.id)
                                             }
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

export default RoleTable;
