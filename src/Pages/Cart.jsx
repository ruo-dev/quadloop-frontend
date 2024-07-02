import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import useUpdateCartItem from "../hooks/Cart/useUpdateCartItem";
import quadloop03 from "../Assets/products/quadlood03.jpeg";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useDeleteCartItem from "../hooks/Cart/useDeleteCartItem";
import useCheckoutPayment from "../hooks/Cart/useCheckoutCart";

const Cart = ({ cartItems, getCartItems }) => {
     console.log("item: ", cartItems);
     const { updateCartItem } = useUpdateCartItem();
     const { deleteCartItem } = useDeleteCartItem();
     const { handlePaystackPayment } = useCheckoutPayment();
     const auth = useAuthContext();
     const navigate = useNavigate();

     const [itemIds, setItemIds] = useState([]);

     const handleQuantityChange = async (id, quantity) => {
          const updatedCartItems = cartItems?.map((item) =>
               item.id === id
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
          );
          getCartItems();
          await updateQuantityToBackend(id, Math.max(1, quantity));
     };

     const handleDeleteItem = async (id) => {
          try {
               console.log("id", id);
               const success = await deleteCartItem(id);
               console.log("success", success);
               if (success) {
                    getCartItems();
               }
               console.log("Cart updated successfully");
          } catch (error) {
               console.error("Error updating cart:", error);
          }
     };

     const getTotalPrice = () => {
          return cartItems
               ?.reduce((total, item) => total + item?.price, 0)
               .toFixed(2);
     };

     const updateQuantityToBackend = async (id, quantity) => {
          try {
               const success = await updateCartItem(id, { quantity });
               console.log("Updated quantity", quantity);
               if (success) {
                    getCartItems();
               }
               console.log("Cart updated successfully");
          } catch (error) {
               console.error("Error updating cart:", error);
          }
     };

     useEffect(() => {
          const ids = cartItems.map((item) => item.id);
          setItemIds(ids);
     }, []);

     const onCheckout = async () => {
          const user = JSON.parse(localStorage.getItem("user"));
          const payload = {
               email: user?.email,
               amount: getTotalPrice(),
               items_id: itemIds,
          };
          const result = await handlePaystackPayment(payload);
          window.location.href = result.authorization_url;
     };

     return (
          <div className="min-h-screen mx-auto p-4">
               <h1 className="mt-[120px] max-w-screen-xl mx-auto text-2xl font-bold mb-4">
                    Shopping Cart
               </h1>
               <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:space-x-4">
                    <div className="w-full md:w-2/3 my-6 md:self-start">
                         {cartItems?.length === 0 ? (
                              <p>Your cart is empty</p>
                         ) : (
                              cartItems?.map((item) => (
                                   <div
                                        key={item?.id}
                                        className="flex items-center justify-between p-4 mb-4 border rounded-lg shadow-sm"
                                   >
                                        <div className="flex items-center space-x-4">
                                             <img
                                                  src={
                                                       item?.product
                                                            ?.product_image_url ??
                                                       quadloop03
                                                  }
                                                  alt={
                                                       item?.product
                                                            ?.product_name
                                                  }
                                                  className="w-16 h-16 object-cover rounded"
                                             />
                                             <div>
                                                  <h2 className="mb-2 font-bold">
                                                       {
                                                            item?.product
                                                                 ?.product_name
                                                       }
                                                  </h2>
                                                  <div className="flex items-center space-x-2">
                                                       <button
                                                            className="px-2 py-1 border rounded"
                                                            onClick={() =>
                                                                 handleQuantityChange(
                                                                      item?.id,
                                                                      item?.quantity -
                                                                           1
                                                                 )
                                                            }
                                                       >
                                                            -
                                                       </button>
                                                       <input
                                                            type="number"
                                                            className="w-12 text-center border rounded"
                                                            value={
                                                                 item?.quantity
                                                            }
                                                            onChange={(e) =>
                                                                 handleQuantityChange(
                                                                      item?.id,
                                                                      parseInt(
                                                                           e
                                                                                .target
                                                                                .value
                                                                      )
                                                                 )
                                                            }
                                                            min="1"
                                                       />
                                                       <button
                                                            className="px-2 py-1 border rounded"
                                                            onClick={() =>
                                                                 handleQuantityChange(
                                                                      item?.id,
                                                                      item?.quantity +
                                                                           1
                                                                 )
                                                            }
                                                       >
                                                            +
                                                       </button>
                                                  </div>
                                                  <p className="text-sm">
                                                       NGN{" "}
                                                       {item?.product?.regular_price.toFixed(
                                                            2
                                                       )}
                                                  </p>
                                             </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-6 justify-between">
                                             <p className="font-bold">
                                                  NGN {item.price.toFixed(2)}
                                             </p>
                                             <button
                                                  className="text-red-500 hover:text-red-700 text-sm"
                                                  onClick={async () =>
                                                       await handleDeleteItem(
                                                            item?.id
                                                       )
                                                  }
                                             >
                                                  remove
                                             </button>
                                        </div>
                                   </div>
                              ))
                         )}
                    </div>
                    <div className="w-full md:w-1/3 p-4 border rounded-lg shadow-sm md:self-start md:mt-6">
                         <h2 className="text-xl font-bold mb-4">Summary</h2>
                         <div className="flex justify-between mb-4">
                              <p>Total Price</p>
                              <p className="font-bold">NGN {getTotalPrice()}</p>
                         </div>
                         <button
                              onClick={() => {
                                   auth.isTokenExpired(Cookies.get("jwt"))
                                        ? navigate("/login")
                                        : cartItems?.length === 0
                                        ? navigate("/products")
                                        : onCheckout();
                              }}
                              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                         >
                              Checkout
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Cart;
