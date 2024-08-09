import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import TagInput from "./TagInput";
import useGetProductById from "../../../hooks/Products/useGetProductById";
import { Circles } from "react-loader-spinner";
import useUpdateProduct from "../../../hooks/Products/useUpdateProduct";
import { useProducts } from "../../../context/ProductContext";

export const EditProductForm = ({ categories }) => {
     const { search } = useLocation();
     const [loading, setLoading] = useState(false);
     const [productName, setProductName] = useState("");
     const [description, setDescription] = useState("");
     const [regularPrice, setRegularPrice] = useState("");
     const [discountPrice, setDiscountPrice] = useState("");
     const [quantity, setQuantity] = useState("");
     const [weight, setWeight] = useState("");
     const [tags, setTags] = useState([]);
     const [category, setCategory] = useState("");
     const imageRef = useRef(null);

     const queryParam = new URLSearchParams(search);
     const productId = queryParam.get("product_id");

     const { product, fetchData: getProduct } = useGetProductById({
          id: productId,
     });
     const { fetchData: getProducts } = useProducts();
     const { updateProduct } = useUpdateProduct({ id: productId });

     const [images, setImages] = useState([]);
     useEffect(() => {
          if (product) {
               setProductName(product?.product_name || "");
               setDescription(product?.product_description || "");
               setRegularPrice(product?.regular_price || "");
               setDiscountPrice(product?.discount_price || "");
               setQuantity(product?.quantity || "");
               setWeight(product?.product_weight || "");
               setTags(product?.tags?.map((tag) => tag?.tag_name) || []);
               setCategory(product?.category.id || "");
               const productImages = Object.values(
                    product?.product_images ?? {}
               )
                    .map((image, index) => ({
                         file: { path: image },
                         url: image,
                    }))
                    .filter((image) => image.url !== null);
               console.log({ images: product.product_images });
               setImages(productImages);
          }
     }, [product]);

     const handleImageChange = (e) => {
          const files = Array.from(e.target.files);
          const newImages = files.map((file) => ({
               file,
               url: URL.createObjectURL(file),
          }));
          setImages((prevImages) => [...prevImages, ...newImages]);
     };

     const handleRemoveImage = (index) => {
          setImages((prevImages) => prevImages.filter((_, i) => i !== index));
     };

     const clearFormFields = () => {
          setProductName("");
          setDescription("");
          setRegularPrice("");
          setDiscountPrice("");
          setQuantity("");
          setWeight("");
          setTags([]);
          setCategory("");
          setImages([]);
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          try {
               const payload = {
                    product_name: productName,
                    description,
                    regular_price: regularPrice,
                    discount_price: discountPrice,
                    category,
                    product_images: images,
                    tags,
                    quantity,
                    weight,
               };
               const result = await updateProduct(payload);
               if (result) {
                    getProducts();
                    getProduct();
                    clearFormFields();
               }
          } catch (error) {
               console.log(error);
          } finally {
               setLoading(false);
          }
     };

     return (
          <div className="relative">
               {loading && (
                    <main className="absolute top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2 bg-gray-200 max-w-[550px] w-full max-h-[550px] h-full m-auto grid place-items-center">
                         <Circles
                              height="80"
                              width="80"
                              color="#0d9488"
                              ariaLabel="circles-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                         />
                    </main>
               )}
               <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                         <h1 className="text-2xl font-semibold text-blue-900">
                              Edit Product Form
                         </h1>
                         <button
                              disabled={loading}
                              type="submit"
                              className="bg-blue-900 py-2 px-6 text-white rounded-md disabled:opacity-50"
                         >
                              Submit
                         </button>
                    </div>
                    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
                         <div className="space-y-4">
                              <h2 className="text-xl font-semibold text-gray-700">
                                   General Information
                              </h2>
                              <div>
                                   <label className="block text-gray-600">
                                        Product Name
                                   </label>
                                   <input
                                        className="bg-gray-200 w-full rounded p-2"
                                        type="text"
                                        value={productName}
                                        onChange={(e) =>
                                             setProductName(e.target.value)
                                        }
                                        required
                                   />
                              </div>
                              <div>
                                   <label className="block text-gray-600">
                                        Description
                                   </label>
                                   <textarea
                                        className="bg-gray-200 w-full rounded p-2"
                                        value={description}
                                        onChange={(e) =>
                                             setDescription(e.target.value)
                                        }
                                        rows={4}
                                        required
                                   ></textarea>
                              </div>
                         </div>
                         <div className="space-y-4">
                              <h2 className="text-xl font-semibold text-gray-700">
                                   Product Media
                              </h2>
                              <div className="flex flex-col justify-between flex-wrap gap-4">
                                   <div className="flex flex-col">
                                        <div className="flex gap-4 h-25">
                                             {images.map((image, index) => (
                                                  <div
                                                       key={index}
                                                       className="relative w-20 h-20"
                                                  >
                                                       <img
                                                            src={image.url}
                                                            alt={`Upload ${index}`}
                                                            className="w-full h-full object-cover rounded-md"
                                                       />
                                                       <button
                                                            type="button"
                                                            onClick={() =>
                                                                 handleRemoveImage(
                                                                      index
                                                                 )
                                                            }
                                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                                       >
                                                            &times;
                                                       </button>
                                                  </div>
                                             ))}
                                        </div>
                                        {images.length > 0 && (
                                             <small className="my-3 text-gray-600">
                                                  Remove all images to upload
                                                  new images
                                             </small>
                                        )}
                                        <input
                                             type="file"
                                             multiple
                                             onChange={handleImageChange}
                                             className="hidden"
                                             ref={imageRef}
                                        />
                                   </div>
                                   <div className="self-end flex gap-2">
                                        <button
                                             type="button"
                                             onClick={() =>
                                                  imageRef.current.click()
                                             }
                                             className=" py-2 px-4 border border-gray-500 text-gray-500 rounded-md"
                                        >
                                             Add Images
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold text-gray-700">
                              Pricing
                         </h2>
                         <div className="space-y-4">
                              <div>
                                   <label className="block text-gray-600">
                                        Regular Price
                                   </label>
                                   <input
                                        className="bg-gray-200 w-full rounded p-2"
                                        type="number"
                                        value={regularPrice}
                                        onChange={(e) =>
                                             setRegularPrice(e.target.value)
                                        }
                                        required
                                   />
                              </div>
                              <div>
                                   <label className="block text-gray-600">
                                        Discount Price
                                   </label>
                                   <input
                                        className="bg-gray-200 w-full rounded p-2"
                                        type="number"
                                        value={discountPrice}
                                        onChange={(e) =>
                                             setDiscountPrice(e.target.value)
                                        }
                                        required
                                   />
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold text-gray-700">
                              Category
                         </h2>
                         <div className="space-y-4">
                              <div>
                                   <label className="block text-gray-600">
                                        Product Category
                                   </label>
                                   <select
                                        className="bg-gray-200 w-full rounded p-2"
                                        value={category}
                                        onChange={(e) =>
                                             setCategory(e.target.value)
                                        }
                                        required
                                   >
                                        <option
                                             value={product?.category?.id}
                                             className="py-2 px-4 text-gray-500"
                                        >
                                             {product?.category?.category_name}
                                        </option>
                                        {categories
                                             .filter(
                                                  (category) =>
                                                       category?.category_name !==
                                                       product?.category
                                                            ?.category_name
                                             )
                                             .map((category) => (
                                                  <option
                                                       key={category?.id}
                                                       value={category?.id}
                                                  >
                                                       {category?.category_name}
                                                  </option>
                                             ))}
                                   </select>
                              </div>
                              <div>
                                   <label className="block text-gray-600">
                                        Product Tags
                                   </label>
                                   <TagInput
                                        tags={tags}
                                        productTags={product?.tags ?? []}
                                        setTags={setTags}
                                   />
                              </div>
                         </div>
                    </div>
                    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
                         <h2 className="text-xl font-semibold text-gray-700">
                              Inventory
                         </h2>
                         <div className="flex gap-4">
                              <div className="flex-1">
                                   <label className="block text-gray-600">
                                        Quantity
                                   </label>
                                   <input
                                        className="bg-gray-200 w-full rounded p-2"
                                        type="number"
                                        value={quantity}
                                        onChange={(e) =>
                                             setQuantity(e.target.value)
                                        }
                                        required
                                   />
                              </div>
                              <div className="flex-1">
                                   <label className="block text-gray-600">
                                        Weight (Kg)
                                   </label>
                                   <input
                                        className="bg-gray-200 w-full rounded p-2"
                                        type="number"
                                        value={weight}
                                        onChange={(e) =>
                                             setWeight(e.target.value)
                                        }
                                        required
                                   />
                              </div>
                         </div>
                    </div>
               </form>
          </div>
     );
};
