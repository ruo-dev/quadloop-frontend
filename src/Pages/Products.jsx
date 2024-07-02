import React, { useMemo } from "react";
import quadloop01 from "../Assets/products/quadlood01.jpeg";
// import quadloop02 from "../Assets/products/quadlood02.jpeg";
// import quadloop03 from "../Assets/products/quadlood03.jpeg";
import { ProductCard } from "../Components/ProductCard";

const Products = ({ products }) => {
     console.log("Products", products);

     const productList = useMemo(() => {
          if (!products) return [];
          return products.map((product) => (
               <ProductCard
                    key={product?.id}
                    image={quadloop01}
                    product={product}
               />
          ));
     }, [products]);

     const renderList = () => {
          return (
               <>
                    {productList.length ? (
                         productList
                    ) : (
                         <p>No products available</p>
                    )}
               </>
          );
     };

     return (
          <main className="min-h-screen">
               <section className="mt-[120px] h-[250px] bg-teal-600 flex items-center justify-center">
                    <h1 className="text-5xl flex-1 text-center font-extrabold text-white">
                         Quadloop Product Listings
                    </h1>
               </section>
               {/* ProductCard listings */}
               <section className="py-16 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 max-w-screen-xl mx-auto">
                    {renderList()}
               </section>
               <section className="py-6">
                    {/* <div className="h-[150px] bg-blue-400"></div> */}
               </section>
          </main>
     );
};

export default Products;
