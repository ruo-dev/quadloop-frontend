import React, { useState } from "react";

const ImageUpload = () => {
     const [images, setImages] = useState([]);

     const handleImageChange = (e) => {
          const files = Array.from(e.target.files);
          const newImages = files.map((file) => ({
               file,
               url: URL.createObjectURL(file),
          }));
          setImages((prevImages) => [...prevImages, ...newImages]);
     };

     const handleRemoveImage = (index) => {
          setImages((prevImages) => prevImages.filter((_, i) => i !== index));
     };

     return (
          <div className="flex flex-col w-full max-w-xl mx-auto p-4">
               <label className="block mb-2 text-lg font-medium text-gray-700">
                    Upload Images
               </label>
               <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
               />

               <div className="max-w-[100px] max-h-[100px] h-full w-full bg-green-500 rounded-md">
                    {images.map((image, index) => (
                         <div key={index} className="relative">
                              <img
                                   src={image.url}
                                   alt={`Upload ${index}`}
                                   className="w-full h-ful object-cover rounded-lg"
                              />
                              <button
                                   type="button"
                                   onClick={() => handleRemoveImage(index)}
                                   className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                              >
                                   &times;
                              </button>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default ImageUpload;
