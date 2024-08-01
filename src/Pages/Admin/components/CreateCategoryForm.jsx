import React, { useState } from "react";
import { useCategories } from "../../../context/CategoryContext";
import useAddCategory from "../../../hooks/Categories/useAddCategory";

const CreateCategoryForm = () => {
     const { addCategory } = useAddCategory();
     const { fetchData: getCategories } = useCategories();
     const [name, setName] = useState("");
     const [description, setDescription] = useState("");

     const handleSubmit = async (e) => {
          e.preventDefault();
          // Handle form submission logic here
          try {
               console.log("Category Name:", name);
               console.log("Description:", description);

               const payload = {
                    category_name: name,
                    category_description: description,
               };

               const result = await addCategory(payload);

               if (result) {
                    getCategories();
                    setName("");
                    setDescription("");
               }
          } catch (error) {
               console.log("error", error);
          }
     };

     return (
          <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-lg my-4">
               <h2 className="text-2xl font-bold mb-6 text-center">
                    Create New Category
               </h2>
               <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                         <label
                              htmlFor="roleName"
                              className="block text-sm font-medium text-gray-700"
                         >
                              Category Name
                         </label>
                         <input
                              type="text"
                              id="name"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
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
                              Create Category
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default CreateCategoryForm;
