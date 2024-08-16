import React from "react";
import useGetUserProfile from "../hooks/users/useGetUserProfile";

const UserProfile = () => {
  const { user } = useGetUserProfile();

  // Calculate the total price of all orders
  const totalPrice = user?.orders?.reduce(
    (prevValue, order) => prevValue + (order?.price ?? 0),
    0
  );

  // Map user orders to a list of products
  const productList =
    user?.orders?.map((order) => ({
      id: order?.product?.id ?? "unknown-id",
      product_name: order?.product?.product_name ?? "Unnamed Product",
      regular_price: order?.product?.regular_price ?? "N/A",
      quantity: order?.quantity ?? 1,
    })) ?? [];

  // Define the user data
  const userData = {
    name: user ? `${user?.first_name} ${user?.last_name}` : "John Doe",
    email: user?.email ?? "johndoe@example.com",
    profileImage: user?.profile_img ?? "https://via.placeholder.com/150",
    totalSpent: totalPrice ? `N${totalPrice}` : "N1,250.00",
    referralReward: user?.reward ?? "$50.00",
    purchaseHistory:
      productList.length > 0
        ? productList
        : [
            {
              id: "1",
              product_name: "Product 1",
              regular_price: "N250.00",
              quantity: 1,
            },
            {
              id: "2",
              product_name: "Product 2",
              regular_price: "N500.00",
              quantity: 1,
            },
          ],
  };

  return (
    <div className="mt-[120px] min-h-screen max-w-5xl mx-auto p-6">
      {/* User Information Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-6">
          <img
            src={userData.profileImage}
            alt={userData.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
            <p className="text-gray-600 mt-4">
              Total Spent:{" "}
              <span className="font-bold">{userData.totalSpent}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Referral Reward Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Referral Rewards</h3>
        <p className="text-gray-600 mt-2">
          Reward Earned:{" "}
          <span className="font-bold">{userData.referralReward}</span>
        </p>
      </div>

      {/* Purchase History Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Purchase History</h3>
        {userData.purchaseHistory.map((purchase) => (
          <div key={purchase.id} className="bg-gray-100 p-4 rounded-lg mb-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{purchase.product_name}</span>
              <span className="text-gray-600">
                {purchase.quantity} x {purchase.regular_price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
