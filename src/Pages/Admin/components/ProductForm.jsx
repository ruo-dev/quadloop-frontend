import React, { useState, useRef } from "react";
import TagInput from "./TagInput";
import useAddProduct from "../../../hooks/Products/useAddProduct";
import { Circles } from "react-loader-spinner";
import { useAnalytics } from "../../../context/AnalyticsContext";

export const ProductForm = ({ categories, getProducts }) => {
     const { addProduct } = useAddProduct();
     const { fetchData: getAnalytics } = useAnalytics();
     const [loading, setLoading] = useState(false);
     const [productName, setProductName] = useState("");
     const [description, setDescription] = useState("");
     const [regularPrice, setRegularPrice] = useState("");
     const [discountPrice, setDiscountPrice] = useState("");
     const [quantity, setQuantity] = useState("");
     const [weight, setWeight] = useState("");
     const [tags, setTags] = useState([]);
     const [category, setCategory] = useState("");
     const [images, setImages] = useState([]);
     const imageRef = useRef(null);

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
               const result = await addProduct(payload);
               if (result) {
                    clearFormFields();
                    getAnalytics();
                    getProducts();
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
               <form
                    onSubmit={handleSubmit}
                    className="h-[650px] flex flex-col"
               >
                    <div className="flex items-center justify-between p-2">
                         <h1 className="my-3 mx-3 text-3xl text-blue-950 font-extrabold">
                              Product Form
                         </h1>
                         <button
                              disabled={loading ? true : false}
                              type="submit"
                              className="bg-blue-900 py-2 px-6 text-white rounded-md"
                         >
                              Submit
                         </button>
                    </div>
                    <div className="flex items-center gap-3  p-2">
                         <div className="border flex-[3] bg-white rounded-md p-4">
                              <h1 className="font-semibold text-gray-700 text-xl">
                                   General Information
                              </h1>
                              <div className="mt-4">
                                   <label className="block">Product Name</label>
                                   <input
                                        className="bg-gray-300 w-full rounded p-2"
                                        type="text"
                                        value={productName}
                                        onChange={(e) =>
                                             setProductName(e.target.value)
                                        }
                                        required
                                   />
                              </div>
                              <div className="mt-4">
                                   <label className="block">Description</label>
                                   <textarea
                                        name="description"
                                        value={description}
                                        onChange={(e) =>
                                             setDescription(e.target.value)
                                        }
                                        cols={12}
                                        rows={5}
                                        className="bg-gray-300 w-full px-3 py-2 mt-1  border border-gray-300 rounded-md"
                                        required
                                   ></textarea>
                              </div>
                         </div>
                         <div className="border self-stretch flex-[2] bg-white rounded-md p-4">
                              <h2 className="font-semibold text-gray-700 text-xl">
                                   Product Media
                              </h2>
                              <div className="w-full h-full max-h-[200px] bg-gray-400 rounded-md p-4 flex flex-col border border-dashed border-spacing-3">
                                   <div className="flex gap-2 justify-center flex-1 min-h-[100px]">
                                        {images.map((image, index) => (
                                             <div
                                                  key={index}
                                                  className="relative max-w-[80px] max-h-[80px] h-full w-full rounded-md"
                                             >
                                                  <img
                                                       src={image.url}
                                                       alt={`Upload ${index}`}
                                                       className="w-full h-full object-cover rounded-lg"
                                                  />
                                                  <button
                                                       type="button"
                                                       onClick={() =>
                                                            handleRemoveImage(
                                                                 index
                                                            )
                                                       }
                                                       className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                                  >
                                                       &times;
                                                  </button>
                                             </div>
                                        ))}
                                   </div>
                                   <input
                                        type="file"
                                        multiple
                                        onChange={handleImageChange}
                                        className="hidden"
                                        ref={imageRef}
                                   />
                                   <button
                                        type="button"
                                        onClick={() => {
                                             imageRef.current.click();
                                        }}
                                        className="self-center py-3 px-6 rounded-md border border-gray-700 text-gray-700"
                                   >
                                        Add Images
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div className="flex items-center gap-3 p-2">
                         <div className="border flex-[3] h-[250px] bg-white rounded-md p-4">
                              <h2 className="font-semibold text-gray-700 text-xl">
                                   Pricing
                              </h2>
                              <div className="">
                                   <div className="mt-4">
                                        <label className="block">
                                             Regular Price
                                        </label>
                                        <input
                                             className="bg-gray-300 w-full rounded p-2"
                                             type="text"
                                             value={regularPrice}
                                             onChange={(e) =>
                                                  setRegularPrice(
                                                       e.target.value
                                                  )
                                             }
                                             required
                                        />
                                   </div>
                                   <div className="mt-4">
                                        <label className="block">
                                             Discount Price
                                        </label>
                                        <input
                                             className="bg-gray-300 w-full rounded p-2"
                                             type="text"
                                             value={discountPrice}
                                             onChange={(e) =>
                                                  setDiscountPrice(
                                                       e.target.value
                                                  )
                                             }
                                             required
                                        />
                                   </div>
                              </div>
                         </div>
                         <div className="border flex-[2] bg-white rounded-md p-4">
                              <h2 className="font-semibold text-gray-700 text-xl">
                                   Category
                              </h2>
                              <div className="mt-4">
                                   <label className="block">
                                        Product Category
                                   </label>
                                   <select
                                        className="bg-gray-300 w-full rounded py-2 px-4 border  focus:outline-none focus:ring"
                                        value={category}
                                        onChange={(e) =>
                                             setCategory(e.target.value)
                                        }
                                        required
                                   >
                                        <option
                                             value=""
                                             disabled
                                             className="py-2 px-4 text-gray-500"
                                        >
                                             Select a category
                                        </option>

                                        {categories?.map((category) => (
                                             <option
                                                  key={category.id}
                                                  value={category.id}
                                                  className="py-2 px-4"
                                             >
                                                  {category.category_name ??
                                                       "Category One"}
                                             </option>
                                        ))}
                                   </select>

                                   <div className="mt-4">
                                        <label className="block">
                                             Product Tags
                                        </label>
                                        <TagInput
                                             tags={tags}
                                             setTags={setTags}
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="p-2">
                         <div className="border bg-white rounded-md p-4">
                              <h2 className="font-semibold text-gray-700 text-xl">
                                   Inventry
                              </h2>
                              <div className="flex justify-between gap-3">
                                   <div className="mt-4 flex-1">
                                        <label className="block">
                                             Quantity
                                        </label>
                                        <input
                                             className="bg-gray-300 w-full rounded p-2"
                                             type="text"
                                             value={quantity}
                                             onChange={(e) =>
                                                  setQuantity(e.target.value)
                                             }
                                             required
                                        />
                                   </div>
                                   <div className="mt-4 flex-1">
                                        <label className="block">
                                             Weight (Kg)
                                        </label>
                                        <input
                                             className="bg-gray-300 w-full rounded p-2"
                                             type="text"
                                             value={weight}
                                             onChange={(e) =>
                                                  setWeight(e.target.value)
                                             }
                                             required
                                        />
                                   </div>
                              </div>
                         </div>
                         {/* <div className="self-stretch flex-[2] p-2"></div> */}
                    </div>
               </form>
          </div>
     );
};
