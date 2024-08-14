import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
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

const ProductSlider = ({ products = [] }) => {
    const length = products.length;
    const displayProducts = products.length > 0 ? products : items;

    return (
        <div className="container mx-auto p-4" >
            <Swiper
                modules={[FreeMode, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={length > 3 ? 3 : length}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {displayProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="bg-white rounded-lg shadow-md p-4 border">
                            <img
                                src={product.product_image_url}
                                alt={product.product_name}
                                className="w-full h-[300px] object-cover rounded-t-lg aspect-square"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold mb-2">
                                    {product.product_name}
                                </h3>
                                <a
                                    href={`/products/${product.id}`}
                                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSlider;
