import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReferralRewardsTable from "./components/RewardsTable";

const Rewards = ({ tab, action }) => {
     const { search } = useLocation();
     const [currentAction, setCurrentAction] = useState(action);
     const [component, setComponent] = useState(null);

     const Actions = {
          list: "list",
          create: "create",
     };

     useEffect(() => {
          const searchParams = new URLSearchParams(search);
          for (const [key, value] of searchParams.entries()) {
               if (key.toLowerCase() === "action") {
                    setCurrentAction(value);
               }
          }
     }, [search]);

     useEffect(() => {
          switch (currentAction) {
               case "":
               case Actions.list:
                    setComponent(<ReferralRewardsTable />);
                    break;
               default:
                    setComponent(<ReferralRewardsTable />);
                    break;
          }
     }, [currentAction, tab]);
     return (
          <main>
               <div>{component}</div>
          </main>
     );
};

export default Rewards;
