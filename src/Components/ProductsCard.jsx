import React from "react";

const ProductsCard = ({ image, category, title, summary, link }) => {
     return (
          <div className="aspect-auto">
               <div className="overflow-hidden transition-shadow duration-300 border border-teal-600 rounded-2xl shadow-2xl shadow-black/30">
                    <img
                         src={image}
                         className="object-contain w-full h-64"
                         alt=""
                    />
                    <div className="p-5 border border-t-0">
                         <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                              <a
                                   href={link}
                                   className="transition-colors duration-200 text-teal-400 hover:text-teal-600"
                              >
                                   {category}
                              </a>
                         </p>
                         <a
                              href={link}
                              className="inline-block mb-3 text-2xl font-bold duration-500 text-teal-400 hover:text-teal-600"
                         >
                              {title}
                         </a>
                         <p className="mb-2 text-gray-700">{summary}</p>
                         <a
                              href={link}
                              className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-400 hover:text-teal-600"
                         >
                              Learn more
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default ProductsCard;
