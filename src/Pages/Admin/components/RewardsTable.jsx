import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Circles } from "react-loader-spinner";
import { useRewards } from "../../../context/RewardContext";

const ReferralRewardsTable = ({ getRewards }) => {
     const { data: rewards, isLoading } = useRewards();
     console.log("rewards table: ", rewards);

     return (
          <div className="overflow-x-auto">
               <div className="flex items-center justify-between my-2">
                    <h1 className="text-xl my-3">Referral Rewards</h1>
               </div>

               <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                         <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">Referrer</th>
                              <th className="py-3 px-6 text-left">Referee</th>
                              <th className="py-3 px-6 text-left">
                                   Product ID
                              </th>
                              <th className="py-3 px-6 text-left">
                                   Reward Points
                              </th>
                              <th className="py-3 px-6 text-left">Redeemed</th>
                              {/* <th className="py-3 px-6 text-left">Actions</th> */}
                         </tr>
                    </thead>
                    {isLoading ? (
                         <div className="flex justify-center items-center h-screen w-full">
                              <>
                                   <Circles
                                        height="250"
                                        width="250"
                                        color="#0d9488"
                                        ariaLabel="circles-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                   />
                              </>
                         </div>
                    ) : (
                         <tbody className="text-gray-600 text-sm font-light">
                              {rewards.map((reward) => (
                                   <tr
                                        key={reward?.id}
                                        className="border-b border-gray-200 hover:bg-gray-100"
                                   >
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                             {reward?.referrer?.email}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                             {reward?.referee?.email}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                             {reward?.product_id}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                             {reward?.reward_points}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                             {reward?.redeemed ? "Yes" : "No"}
                                        </td>
                                        {/* <td className="py-3 px-6 text-left">
                                        <button className=" py-1 px-3 rounded text-xs">
                                             <MdEdit />
                                        </button>
                                        <button className="bg-red-500 text-white py-1 px-3 rounded text-xs ml-2">
                                             <RiDeleteBinLine />
                                        </button>
                                   </td> */}
                                   </tr>
                              ))}
                         </tbody>
                    )}
               </table>
          </div>
     );
};

export default ReferralRewardsTable;
