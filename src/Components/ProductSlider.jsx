import React, { useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts } from "../context/ProductContext";
import { Link } from "react-router-dom";
import quadlood01 from "../Assets/products/quadlood01.jpeg";
import quadlood02 from "../Assets/products/quadlood02.jpeg";
import quadlood03 from "../Assets/products/quadlood03.jpeg";

const items = [
     {
          product_name: "Product One",
          product_image_url: quadlood01,
          id: "1",
     },
     {
          product_name: "Product Two",
          product_image_url: quadlood02,
          id: "2",
     },
     {
          product_name: "Product Three",
          product_image_url: quadlood03,
          id: "3",
     },
     {
          product_name: "Product Four",
          product_image_url: quadlood03,
          id: "4",
     },
     {
          product_name: "Product Five",
          product_image_url: quadlood03,
          id: "5",
     },
     {
          product_name: "Product Six",
          product_image_url: quadlood03,
          id: "6",
     },
     {
          product_name: "Product Seven",
          product_image_url: quadlood03,
          id: "7",
     },
];

const ProductSlider = ({ style }) => {
     const { data: products } = useProducts();

     const memoizedProducts = useMemo(() => {
          return products.length > 0 ? products.slice(0, 4) : items;
     }, [products]);

     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                         infinite: true,
                         dots: true,
                    },
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    },
               },
          ],
     };

     return (
          <div
               className="relative max-w-screen-xl w-full overflow-x-hidden mx-auto"
               style={{ ...style }}
          >
               <Slider {...settings}>
                    {memoizedProducts.map((product, index) => (
                         <div key={index} className="p-4">
                              <div className="bg-white rounded-lg shadow-md">
                                   <div className="h-[300px]">
                                        <img
                                             src={product?.product_image_url}
                                             alt={product?.product_name}
                                             className="w-full h-full object-cover aspect-square rounded-t-lg"
                                        />
                                   </div>

                                   <div className="p-4">
                                        <h3 className="text-xl font-bold">
                                             {product?.product_name}
                                        </h3>
                                        <Link
                                             to={`/products/${product?.id}`}
                                             className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                        >
                                             View Details
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    ))}
               </Slider>
          </div>
     );
};

export default ProductSlider;
