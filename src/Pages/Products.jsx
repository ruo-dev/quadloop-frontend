import React, { useMemo } from "react";
import quadloop01 from "../Assets/products/quadlood01.jpeg";
import { ProductCard } from "../Components/ProductCard";

const Products = ({ products, getCartItems }) => {
  const productList = useMemo(() => {
    if (!products) return [];
    return products.map((product) => (
      <ProductCard
        key={product?.id}
        image={quadloop01}
        product={product}
        getCartItems={getCartItems}
      />
    ));
  }, [products, getCartItems]);

  const renderList = () => {
    return (
      <>
        {productList.length ? (
          productList
        ) : (
          <p className="text-center text-lg text-gray-700">
            No products available
          </p>
        )}
      </>
    );
  };

  return (
    <main className="min-h-screen">
      <section className="mt-[120px] h-[150px] bg-teal-600 flex items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center">
          Quadloop Product Listings
        </h1>
      </section>
      {/* ProductCard listings */}
      <section className="py-12 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {renderList()}
      </section>
      <section className="py-6">
        {/* <div className="h-[150px] bg-blue-400"></div> */}
      </section>
    </main>
  );
};

export default Products;
