import React from "react";
import quadloop01 from "../Assets/products/quadlood01.jpeg";
import quadloop02 from "../Assets/products/quadlood02.jpeg";
import quadloop03 from "../Assets/products/quadlood03.jpeg";
import { ProductCard } from "../Components/ProductCard";

const Products = () => {
     return (
          <main className="min-h-screen">
               <section className="mt-[120px] h-[250px] bg-teal-600 flex items-center justify-center">
                    <h1 className="text-5xl flex-1 text-center font-extrabold text-white">
                         Quadloop Product Listings
                    </h1>
               </section>
               {/* ProductCard listings */}
               <section className="py-16 px-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-1 max-w-screen-xl mx-auto">
                    <ProductCard image={quadloop01} />
                    <ProductCard image={quadloop01} />
                    <ProductCard image={quadloop01} />
                    <ProductCard image={quadloop03} />
                    <ProductCard image={quadloop01} />
                    <ProductCard image={quadloop01} />
                    <ProductCard image={quadloop02} />
                    <ProductCard image={quadloop01} />
                    <ProductCard image={quadloop01} />
               </section>
               <section className="py-6">
                    {/* <div className="h-[150px] bg-blue-400"></div> */}
               </section>
          </main>
     );
};

export default Products;
