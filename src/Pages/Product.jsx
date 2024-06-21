import React from "react";
import { ProductCard } from "../Components/ProductCard";
import quadloop03 from "../Assets/products/quadlood03.jpeg";

export const ProductDetails = () => {
     return (
          <main className="min-h-screen">
               <section className="mt-[120px] flex flex-col lg:flex-row items-center justify-between max-w-screen-xl mx-auto py-6">
                    <div className="p-4 lg:flex-1 w-full">
                         <img
                              className="h-[30rem] md:h-[40rem]  aspect-square rounded-3xl m-auto"
                              src={quadloop03}
                              alt=""
                         />
                    </div>
                    <div className="p-6 self-start lg:flex-1">
                         <header>
                              <h1 className="text-4xl font-bold">
                                   Pure Coconut oil
                              </h1>
                         </header>
                         <h3
                              className="font-semibold my-6"
                              style={{
                                   letterSpacing: 1.2,
                              }}
                         >
                              ${50}
                         </h3>
                         <article
                              className="text-xl"
                              style={{
                                   lineHeight: 2,
                                   textAlign: "justify",
                              }}
                         >
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Veniam adipisci delectus aspernatur? Quos
                              consequuntur nam non qui eius accusamus, nihil
                              dolorum, minus recusandae error cumque numquam
                              aliquam? Vitae accusantium magni quisquam rem sunt
                              {/* neque ad nesciunt autem. Consectetur aperiam quas
                              perferendis minima ducimus hic distinctio enim
                              deleniti nisi architecto iure officiis,
                              repudiandae vitae minus! Illum odio voluptate
                              aspernatur atque molestias quas illo ut qui rem,
                              temporibus, voluptatum, nobis dolorum veniam? */}
                         </article>
                         <div className="flex items-center justify-between">
                              <h3 className="font-bold my-4">Quantity</h3>
                              <h3>1</h3>
                         </div>
                         <div>
                              <button className="w-full py-4 px-6 font-bold bg-teal-600 text-white">
                                   Add To Cart
                              </button>
                         </div>
                    </div>
               </section>
               <section className="grid items-center grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-center gap-2 max-w-screen-xl my-10 mx-auto">
                    <ProductCard image={quadloop03} />
                    <ProductCard image={quadloop03} />
                    <ProductCard image={quadloop03} />
                    <ProductCard image={quadloop03} />
                    <ProductCard image={quadloop03} />
               </section>
          </main>
     );
};
