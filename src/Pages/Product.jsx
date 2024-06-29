import React, { useMemo } from "react";
import { ProductCard } from "../Components/ProductCard";
import quadloop03 from "../Assets/products/quadlood03.jpeg";
import { useParams } from "react-router-dom";
import useGetProductById from "../hooks/Products/useGetProductById";
import useGetAllProducts from "../hooks/Products/useGetAllProducts";
import useAddToCart from "../hooks/Cart/useAddToCart";

export const ProductDetails = () => {
     const { productId: id } = useParams();
     const { product } = useGetProductById({ id });
     const { data: products } = useGetAllProducts();
     const { addToCart } = useAddToCart();
     console.log("productDetails", product);

     const payload = {
          product_id: product?.id ?? "",
          quantity: 1,
          price: product?.discount_price
               ? product?.discount_price
               : product?.regular_price ?? 0,
     };

     console.log("product", product);

     const productList = useMemo(() => {
          if (!products) return [];
          return products
               .slice(0, 5)
               .map((product) => (
                    <ProductCard
                         key={product?.id}
                         image={quadloop03}
                         product={product}
                    />
               ));
     }, [products]);

     const addItemToCart = async () => {
          await addToCart(payload);
     };

     return (
          <main className="min-h-screen">
               <section className="mt-[120px] flex flex-col lg:flex-row items-center justify-between max-w-screen-xl mx-auto py-6">
                    <div className="p-4 lg:flex-1 w-full">
                         <img
                              className="h-[30rem] md:h-[40rem]  aspect-square rounded-3xl m-auto"
                              src={product?.product_image_url ?? quadloop03}
                              alt=""
                         />
                    </div>
                    <div className="p-6 self-start lg:flex-1">
                         <header>
                              <h1 className="text-4xl font-bold">
                                   {product?.product_name ?? "Pure Coconut oil"}
                              </h1>
                         </header>
                         <h3
                              className="font-semibold my-6"
                              style={{
                                   letterSpacing: 1.2,
                              }}
                         >
                              NGN {product?.regular_price ?? 50}
                         </h3>
                         <article
                              className="text-xl"
                              style={{
                                   lineHeight: 2,
                                   textAlign: "justify",
                              }}
                         >
                              {product?.product_description ??
                                   `neque ad nesciunt autem. Consectetur aperiam quas
                              perferendis minima ducimus hic distinctio enim
                              deleniti nisi architecto iure officiis,
                              repudiandae vitae minus! Illum odio voluptate
                              aspernatur atque molestias quas illo ut qui rem,
                              temporibus, voluptatum, nobis dolorum veniam?`}
                         </article>
                         <div className="flex items-center justify-between">
                              <h3 className="font-bold my-4">Quantity</h3>
                              <h3>{product?.quantity ?? 1}</h3>
                         </div>
                         <div>
                              <button
                                   onClick={addItemToCart}
                                   className="w-full py-4 px-6 font-bold bg-teal-600 text-white active:bg-teal-500"
                              >
                                   Add To Cart
                              </button>
                         </div>
                    </div>
               </section>
               <h1 className="text-3xl  max-w-screen-xl m-auto px-3">
                    You might also like
               </h1>
               <section className="grid items-center  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-2 max-w-screen-xl my-10 mx-auto px-8">
                    {productList}
               </section>
          </main>
     );
};
