import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import "../../common/skeleton/skeleton.css";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    let productsCollection = collection(db, "products");
    let consulta = productsCollection; // Asigna la colección por defecto

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("categories", "==", category)
      );
      consulta = productsCollectionFiltered; // Si hay una categoría, asigna la colección filtrada
    }

    getDocs(consulta)
      .then((res) => {
        let arrayDecrypted = res.docs.map((e) => {
          return { ...e.data(), id: e.id };
        });
        setItems(arrayDecrypted);
      })
      .finally(() => setIsLoading(false));
  }, [category]);
  return (
    <>
      {isLoading ? (
        <>
          <div className="pageContainer ">
            <div className="skeletonContainer">
              <Skeleton variant="rectangular" width={300} height={250} />
              <Skeleton variant="rectangular" width={300} height={250} />
              <Skeleton variant="rectangular" width={300} height={250} />
              <Skeleton variant="rectangular" width={300} height={250} />
            </div>
          </div>
        </>
      ) : (
        <ItemList saludo={greeting} items={items} />
      )}
    </>
  );
}

export default ItemListContainer;
