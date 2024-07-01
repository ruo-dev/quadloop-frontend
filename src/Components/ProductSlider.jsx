import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductSlider = ({ images, style }) => {
     const [currentIndex, setCurrentIndex] = useState(0);

     const nextSlide = () => {
          setCurrentIndex((prevIndex) =>
               prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
     };

     const prevSlide = () => {
          setCurrentIndex((prevIndex) =>
               prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
     };

     return (
          <div
               className="relative w-full max-w-[450px] mx-auto border"
               style={{ ...style }}
          >
               <div className="overflow-hidden relative w-full h-[300px]">
                    {images.map((item, index) => (
                         <div
                              key={item.id}
                              className={`p-6 absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                   index === currentIndex
                                        ? "opacity-100"
                                        : "opacity-0"
                              }`}
                         >
                              <img
                                   src={item.image}
                                   alt={`Product Image ${index + 1}`}
                                   className="w-full h-full aspect-video"
                              />
                         </div>
                    ))}

                    <button
                         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
                         onClick={prevSlide}
                    >
                         ‹
                    </button>
                    <button
                         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
                         onClick={nextSlide}
                    >
                         ›
                    </button>

                    {images[currentIndex] && (
                         <Link
                              to={`/products/${images[currentIndex].id}`}
                              className="absolute left-1/2 bottom-0 transform -translate-x-1/2 bg-teal-500 text-white py-2 px-4 rounded"
                         >
                              Order Now
                         </Link>
                    )}
               </div>
          </div>
     );
};

export default ProductSlider;
