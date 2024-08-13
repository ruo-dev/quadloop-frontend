import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CategoriesTable from "./components/CategoriesTable";
import CreateCategoryForm from "./components/CreateCategoryForm";

const Categories = ({ tab, action, categories, getCategories }) => {
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
                    setComponent(
                         <CategoriesTable
                              categories={categories}
                              getCategories={getCategories}
                         />
                    );
                    break;
               case Actions.create:
                    setComponent(
                         <CreateCategoryForm getCategories={getCategories} />
                    );

                    break;
               default:
                    setComponent(<CategoriesTable categories={categories} />);
                    break;
          }
     }, [currentAction, tab]);
     return (
          <main>
               <div>{component}</div>
          </main>
     );
};

export default Categories;
