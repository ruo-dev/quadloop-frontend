import React, { useEffect, useState } from "react";
import { ProductForm } from "./components/ProductForm";
import { useLocation } from "react-router-dom";
import ProductTable from "./components/ProductTable";
import { useProducts } from "../../context/ProductContext";
import { useCategories } from "../../context/CategoryContext";

const Products = ({ tab, action }) => {
     const { search } = useLocation();
     const { data: categories } = useCategories();
     const { data: products, fetchData: getProducts } = useProducts();
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
                    setComponent(<ProductTable products={products} />);
                    break;
               case Actions.create:
                    setComponent(
                         <ProductForm
                              categories={categories}
                              getProducts={getProducts}
                         />
                    );
                    break;
               default:
                    setComponent(<ProductTable products={products} />);
                    break;
          }
     }, [currentAction, tab]);

     return (
          <main>
               <div>{component}</div>
          </main>
     );
};

export default Products;
