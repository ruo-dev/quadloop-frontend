import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import { useLocation } from "react-router-dom";
import UserTable from "./components/UserTable";
import { useUsers } from "../../context/UserContext";
import { useRoles } from "../../context/RoleContext";

const Users = ({ tab, action }) => {
     const { search } = useLocation();
     const { users, fetchUsers } = useUsers();
     const { roles } = useRoles();
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
                    setComponent(<UserTable users={users} />);
                    break;
               case Actions.create:
                    setComponent(
                         <UserForm roles={roles} fetchUsers={fetchUsers} />
                    );

                    break;
               default:
                    setComponent(<UserTable users={users} />);
                    break;
          }
     }, [currentAction, tab]);

     return (
          <main>
               <div>{component}</div>
          </main>
     );
};

export default Users;
