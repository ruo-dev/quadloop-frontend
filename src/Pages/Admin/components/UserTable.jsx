import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import useDeleteUser from "../../../hooks/users/useDeleteUser";
import { useUsers } from "../../../context/UserContext";

const UserTable = () => {
     const { deleteUser } = useDeleteUser();
     const { users, fetchUsers } = useUsers();

     useEffect(() => {
          if (users.length === 0) {
               fetchUsers();
          }
     }, []);
     const handleDeleteUser = async (userId) => {
          try {
               const result = await deleteUser(userId);
               if (result) {
                    fetchUsers();
               }
          } catch (error) {
               console.log("error: ", error.message);
          }
     };
     return (
          <div className="overflow-x-auto">
               <div className="flex items-center justify-between my-2">
                    <h1 className="text-xl my-3">User List</h1>
                    <Link
                         className="py-2 px-6 bg-blue-500 text-white rounded-md"
                         to="/admin?tab=users&action=create"
                    >
                         Create
                    </Link>
               </div>

               <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                         <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">Id</th>
                              <th className="py-3 px-6 text-left">
                                   First Name
                              </th>
                              <th className="py-3 px-6 text-left">Last Name</th>
                              <th className="py-3 px-6 text-left">Email</th>
                              <th className="py-3 px-6 text-left">Role</th>
                              <th className="py-3 px-6 text-left">Active</th>
                              <th className="py-3 px-6 text-center">Actions</th>
                         </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                         {users?.map((userData) => (
                              <tr
                                   key={userData?.user?.id}
                                   className="border-b border-gray-200 hover:bg-gray-100"
                              >
                                   <td className="py-3 px-6 text-left whitespace-nowrap">
                                        {userData?.user?.id}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {userData?.user?.first_name}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {userData?.user?.last_name}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {userData?.user?.email}
                                   </td>
                                   <td className="py-3 px-6 text-left">
                                        {userData?.role?.role_name}
                                   </td>
                                   <td
                                        className={`py-3 px-6 text-left ${
                                             userData?.user?.active
                                                  ? "text-green-500"
                                                  : "text-red-500"
                                        }`}
                                   >
                                        {userData?.user?.active
                                             ? "Active"
                                             : "Inactive"}
                                   </td>
                                   <td className="py-3 px-6 text-center">
                                        <button className=" py-1 px-3 rounded text-xs">
                                             <MdEdit />
                                        </button>
                                        <button
                                             onClick={() =>
                                                  handleDeleteUser(
                                                       userData?.user?.id
                                                  )
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

export default UserTable;
