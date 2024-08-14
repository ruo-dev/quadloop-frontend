import React from "react";

const UserProfile = () => {
    const userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        profileImage: "https://via.placeholder.com/150",
        totalSpent: "$1,250.00",
        referralCode: "JOHNREF123",
        referralReward: "$50.00",
        purchaseHistory: [
            {
                id: "1",
                date: "2024-07-25",
                items: [
                    { name: "Product 1", price: "$250.00", quantity: 1 },
                    { name: "Product 2", price: "$500.00", quantity: 2 },
                ],
            },
            {
                id: "2",
                date: "2024-08-02",
                items: [{ name: "Product 3", price: "$500.00", quantity: 1 }],
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
                            Total Spent: <span className="font-bold">{userData.totalSpent}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Referral Reward Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Referral Rewards</h3>
                <p className="text-gray-600">
                    Referral Code: <span className="font-bold">{userData.referralCode}</span>
                </p>
                <p className="text-gray-600 mt-2">
                    Reward Earned: <span className="font-bold">{userData.referralReward}</span>
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Share Referral Code
                </button>
            </div>

            {/* Purchase History Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Purchase History</h3>
                {userData.purchaseHistory.map((purchase) => (
                    <div key={purchase.id} className="mb-6">
                        <h4 className="text-lg font-bold mb-2">
                            Purchase Date: {purchase.date}
                        </h4>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            {purchase.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center mb-2"
                                >
                                    <span className="text-gray-600">{item.name}</span>
                                    <span className="text-gray-600">
                                        {item.quantity} x {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserProfile;
