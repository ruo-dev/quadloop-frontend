import React, { useState } from "react";
import useCreateUser from "../../../hooks/users/useCreateUser";
import { useRoles } from "../../../context/RoleContext";
import { useAnalytics } from "../../../context/AnalyticsContext";

const UserForm = ({ formName, fetchUsers }) => {
     const { roles } = useRoles();
     const { fetchData: getAnalytics } = useAnalytics();
     const { createUser } = useCreateUser();
     const [form, setForm] = useState({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          role: "",
     });

     const handleInputChange = (e) => {
          const { name, value } = e.target;
          setForm({
               ...form,
               [name]: value,
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          const payload = {
               first_name: form.firstName,
               last_name: form.lastName,
               email: form.email,
               phone_number: form.phoneNumber,
               role_id: form.role,
          };
          const result = await createUser(payload);
          if (result) {
               setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    role: "",
               });
               fetchUsers();
               getAnalytics();
          }
          console.log("Form submitted:", form);
     };

     return (
          <div className="container mx-auto p-4 md:max-w-[650px]">
               <h2 className="text-2xl md:text-center font-semi-bold mb-4">
                    {formName ?? "Create User Form"}
               </h2>
               <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                         <h3 className="text-xl font-bold mb-2">
                              {formName ?? "Create User"}
                         </h3>
                         <form onSubmit={handleSubmit}>
                              <div className="mb-4">
                                   <label className="block text-gray-700">
                                        First Name
                                   </label>
                                   <input
                                        className="w-full p-2 border rounded"
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleInputChange}
                                   />
                              </div>
                              <div className="mb-4">
                                   <label className="block text-gray-700">
                                        Last Name
                                   </label>
                                   <input
                                        className="w-full p-2 border rounded"
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleInputChange}
                                   />
                              </div>
                              <div className="mb-4">
                                   <label className="block text-gray-700">
                                        Email
                                   </label>
                                   <input
                                        className="w-full p-2 border rounded"
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleInputChange}
                                   />
                              </div>
                              <div className="mb-4">
                                   <label className="block text-gray-700">
                                        Phone Number
                                   </label>
                                   <input
                                        className="w-full p-2 border rounded"
                                        type="tel"
                                        name="phoneNumber"
                                        value={form.phoneNumber}
                                        onChange={handleInputChange}
                                   />
                              </div>
                              <div className="mb-4">
                                   <label className="block text-gray-700">
                                        Role
                                   </label>
                                   <select
                                        className="w-full p-2 border rounded"
                                        name="role"
                                        value={form.role}
                                        onChange={handleInputChange}
                                   >
                                        <option>Select a Role</option>
                                        {roles?.map((role) => (
                                             <option
                                                  key={role.id}
                                                  value={role.id}
                                             >
                                                  {role.role_name}
                                             </option>
                                        ))}
                                   </select>
                              </div>
                              <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                                   Submit
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default UserForm;
