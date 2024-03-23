import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import "../../common/skeleton/skeleton.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { addCart, getTotalQuantityById } = useContext(CartContext);

  let total = getTotalQuantityById(id);

  useEffect(() => {
    setIsLoading(true);

    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let productInfo = {
      ...item,
      quantity: cantidad,
    };
    addCart(productInfo);
  };

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
        <ItemDetail item={item} onAdd={onAdd} total={total} />
      )}
    </>
  );
}

export default ItemDetailContainer;
