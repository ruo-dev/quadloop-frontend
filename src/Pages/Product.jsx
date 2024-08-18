import React, { useCallback, useMemo, useState } from "react";
import Cookies from "js-cookie";
import { ProductCard } from "../Components/ProductCard";
import { Modal } from "../Components/Modal";
import quadloop03 from "../Assets/products/quadlood03.jpeg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useGetProductById from "../hooks/Products/useGetProductById";
import useAddToCart from "../hooks/Cart/useAddToCart";
import { useAuthContext } from "../context/AuthContext";
import { Circles } from "react-loader-spinner";
import Loader from "../Components/Loader";

export const ProductDetails = ({ products, getCartItems }) => {
  const { productId: id } = useParams();
  const { product, isLoading } = useGetProductById({ id });
  const { addToCart } = useAddToCart();
  const auth = useAuthContext();
  const navigate = useNavigate();
  const { search } = useLocation();
  const token = Cookies.get("jwt");
  const [isOpen, setIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const user = JSON.parse(window.localStorage.getItem("user") || "{}");
  const referralLink = `${window.location.href}?referrer=${
    user ? user.id : ""
  }`;

  const queryParam = new URLSearchParams(search);
  const referrer = queryParam.get("referrer");

  if (
    referrer &&
    referrer !== user.id &&
    localStorage.getItem("referrer") !== referrer
  ) {
    localStorage.setItem("referrer", referrer);
  }

  if (id && localStorage.getItem("referred_product") !== id) {
    localStorage.setItem("referred_product", product?.id);
  }

  const payload = {
    product_id: product?.id,
    quantity: 1,
  };

  const handleModalChange = () => {
    setIsOpen(!isOpen);
    setCopySuccess("");
  };

  const handleCopy = () => {
    if (auth.isTokenExpired(token)) return navigate("/login");
    navigator.clipboard.writeText(referralLink).then(
      () => {
        setCopySuccess("Copied!");
      },
      () => {
        setCopySuccess("Failed to copy!");
      }
    );
  };

  const productList = useMemo(() => {
    if (!products) return [];
    return products
      .slice(0, 5)
      .map((product) => (
        <ProductCard
          getCartItems={getCartItems}
          key={product?.id}
          image={quadloop03}
          product={product}
        />
      ));
  }, [products, getCartItems]);

  const addItemToCart = useCallback(async () => {
    try {
      if (!auth.isTokenExpired(token)) {
        const success = await addToCart(payload);
        if (success) {
          console.log("Added to cart");
          getCartItems();
          return;
        }
        return;
      }
      return navigate("/login");
    } catch (error) {
      console.log("Error", error);
    }
  }, [addToCart, auth, token, payload, getCartItems, navigate]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleModalChange}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Share this Product</h1>
          <p>Share this product with your friends to earn rewards!</p>
          <div className="mt-4 flex">
            <input
              className="w-full border outline-none p-2"
              type="text"
              value={referralLink ?? ""}
              readOnly
            />
            <button
              onClick={handleCopy}
              className="bg-teal-600 text-white py-3 px-7"
            >
              Copy
            </button>
          </div>
          {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}
        </div>
      </Modal>
      <main className="min-h-screen">
        {isLoading ? (
          <div className="mt-[120px] mx-auto h-[30rem] md:h-[40rem] aspect-square grid place-items-center">
            <Loader />
          </div>
        ) : (
          <section className="mt-[120px] flex flex-col lg:flex-row items-center justify-between max-w-screen-xl mx-auto py-8">
            <div className="p-4 lg:flex-1 w-full">
              <img
                className="h-[25rem] md:h-[30rem] aspect-square rounded-3xl m-auto shadow-lg"
                src={product?.product_image_url ?? quadloop03}
                alt={product?.product_name || "Product"}
              />
            </div>
            <div className="p-6 lg:flex-1 w-full">
              <header>
                <h1 className="text-4xl font-bold text-gray-800">
                  {product?.product_name ?? "Pure Coconut oil"}
                </h1>
              </header>
              <h3
                className="font-semibold my-6 text-lg text-teal-600"
                style={{ letterSpacing: 1.2 }}
              >
                NGN {product?.regular_price ?? 50}
              </h3>
              <article className="text-lg text-gray-700 leading-relaxed">
                {product?.product_description ??
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada cursus malesuada.`}
              </article>
              <div className="flex items-center justify-between my-4">
                <h3 className="font-bold">Quantity</h3>
                <h3>{product?.quantity ?? 1}</h3>
              </div>
              <div className="my-4">
                <button
                  onClick={addItemToCart}
                  className="w-full py-4 px-6 font-bold bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-500 transition"
                >
                  Add To Cart
                </button>
              </div>
              <div className="my-2">
                <button
                  onClick={handleModalChange}
                  className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-500 transition"
                >
                  Share & Refer
                </button>
              </div>
            </div>
          </section>
        )}
        <h1 className="text-3xl max-w-screen-xl m-auto px-3 mb-6 text-center">
          You might also like
        </h1>
        <section className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-6 max-w-screen-xl mb-10 mx-auto px-8">
          {productList}
        </section>
      </main>
    </>
  );
};
