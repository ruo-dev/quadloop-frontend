import React, { useEffect, useState } from "react";
import RoleTable from "./components/RoleTable";
import CreateRoleForm from "./components/CreateRoleForm";
import { useLocation } from "react-router-dom";

const Roles = ({ tab, action, roles, getRoles }) => {
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
                    setComponent(<RoleTable roles={roles} />);
                    break;
               case Actions.create:
                    setComponent(<CreateRoleForm getRoles={getRoles} />);

                    break;
               default:
                    setComponent(<RoleTable roles={roles} />);
                    break;
          }
     }, [currentAction, tab]);
     return (
          <main>
               <div>{component}</div>
          </main>
     );
};

export default Roles;
