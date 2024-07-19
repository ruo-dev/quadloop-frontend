import React, { useState } from "react";

const TagInput = ({ tags, setTags }) => {
     const [input, setInput] = useState("");

     const addTag = (e) => {
          if (e.key === "Enter" && input.trim() !== "") {
               const newTags = input
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter((tag) => tag !== "");
               setTags([...tags, ...newTags]);
               setInput("");
               e.preventDefault();
          }
     };

     const removeTag = (indexToRemove) => {
          setTags(tags.filter((_, index) => index !== indexToRemove));
     };

     const handleChange = (e) => {
          setInput(e.target.value);
     };

     const handlePaste = (e) => {
          const paste = (e.clipboardData || window.clipboardData).getData(
               "text"
          );
          const newTags = paste
               .split(",")
               .map((tag) => tag.trim())
               .filter((tag) => tag !== "");
          setTags([...tags, ...newTags]);
          e.preventDefault();
     };

     return (
          <div className="flex flex-col w-full">
               <div className="flex flex-wrap items-center border border-gray-300 p-2 rounded">
                    {tags.map((tag, index) => (
                         <div
                              key={index}
                              className="flex items-center bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2"
                         >
                              <span>{tag}</span>
                              <button
                                   type="button"
                                   className="ml-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center"
                                   onClick={() => removeTag(index)}
                              >
                                   &times;
                              </button>
                         </div>
                    ))}
                    <input
                         type="text"
                         value={input}
                         onChange={handleChange}
                         onKeyDown={addTag}
                         onPaste={handlePaste}
                         className="flex-grow p-1 border-none focus:outline-none"
                         placeholder="Press enter to add a tag"
                    />
               </div>
          </div>
     );
};

export default TagInput;
