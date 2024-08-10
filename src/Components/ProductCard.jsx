import React, { useState } from "react";
import { LiaCartPlusSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import useAddToCart from "../hooks/Cart/useAddToCart";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const ProductCard = ({ image, style, product, getCartItems }) => {
     const [isHovered, setIsHovered] = useState(false);
     const { addToCart } = useAddToCart();
     const auth = useAuthContext();
     const navigate = useNavigate();

     const payload = {
          product_id: product?.id ?? "",
          quantity: 1,
     };

     const addItemToCart = async () => {
          try {
               const success = await addToCart(payload);
               if (success) {
                    getCartItems();
                    console.log("Added to cart");
                    return;
               }
          } catch (error) {
               console.log("Error", error);
          }
     };

     return (
          <div
               key={product?.id}
               style={{ ...style }}
               className={
                    isHovered
                         ? "shadow-md rounded-3xl p-3 bg-white"
                         : "p-3 bg-white"
               }
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
          >
               <figure className="product-image relative">
                    <img
                         className="rounded-xl w-full aspect-square"
                         src={product?.product_image_url ?? image}
                         alt=""
                    />
                    <button
                         onClick={addItemToCart}
                         className="absolute text-2xl py-4 px-4 rounded-full bg-gray-200 hover:bg-teal-600 hover:text-white right-4 bottom-6 grid place-items-center cursor-pointer"
                    >
                         <LiaCartPlusSolid />
                    </button>
               </figure>
               <figcaption className="product-desc py-1">
                    <h2 className="my-2 text-gray-800">
                         {product?.product_name ??
                              "Gold color vintage Geometry"}
                    </h2>
                    <ul className="my-1 flex text-gray-400">
                         <li>xxxxxx</li>
                         <li>{5000}+ sold</li>
                    </ul>
                    <div className="font-extrabold">
                         <small>NGN</small>
                         {product?.regular_price ?? "1,485.87"}
                    </div>
               </figcaption>
               <div className="flex items-center justify-center py-1">
                    <Link
                         to={`/products/${product?.id}`}
                         className={
                              isHovered
                                   ? "visible h-10 rounded-3xl w-full py-2 px-6 font-bold bg-teal-600 text-white"
                                   : "invisible h-10"
                         }
                         style={{ display: "block", textAlign: "center" }}
                    >
                         See Preview
                    </Link>
               </div>
          </div>
     );
};
