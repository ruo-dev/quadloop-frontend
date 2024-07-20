import React, { useState } from "react";
import useAddRole from "../../../hooks/Roles/useAddRole";

const CreateRoleForm = ({ getRoles }) => {
     const { addRole } = useAddRole();
     const [roleName, setRoleName] = useState("");
     const [description, setDescription] = useState("");

     const handleSubmit = async (e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log("Role Name:", roleName);
          console.log("Description:", description);

          const payload = {
               role_name: roleName,
               description: description,
          };

          const result = await addRole(payload);

          if (result) {
               getRoles();
          }

          setRoleName("");
          setDescription("");
     };

     return (
          <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-lg my-4">
               <h2 className="text-2xl font-bold mb-6 text-center">
                    Create New Role
               </h2>
               <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                         <label
                              htmlFor="roleName"
                              className="block text-sm font-medium text-gray-700"
                         >
                              Role Name
                         </label>
                         <input
                              type="text"
                              id="roleName"
                              name="roleName"
                              value={roleName}
                              onChange={(e) => setRoleName(e.target.value)}
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                              required
                         />
                    </div>
                    <div className="mb-4">
                         <label
                              htmlFor="description"
                              className="block text-sm font-medium text-gray-700"
                         >
                              Description
                         </label>
                         <textarea
                              id="description"
                              name="description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                              rows="3"
                              required
                         ></textarea>
                    </div>
                    <div className="text-center">
                         <button
                              type="submit"
                              className="w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                         >
                              Create Role
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default CreateRoleForm;
