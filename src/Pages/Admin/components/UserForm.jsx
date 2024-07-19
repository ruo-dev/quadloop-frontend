import React, { useState } from "react";

const UserForm = ({ formName }) => {
     const [form, setForm] = useState({
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          role: "User",
     });

     const handleInputChange = (e) => {
          const { name, value } = e.target;
          setForm({
               ...form,
               [name]: value,
          });
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          // Handle form submission logic here
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
                                        Username
                                   </label>
                                   <input
                                        className="w-full p-2 border rounded"
                                        type="text"
                                        name="username"
                                        value={form.username}
                                        onChange={handleInputChange}
                                   />
                              </div>
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
                                        <option value="User">User</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Editor">Editor</option>
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
