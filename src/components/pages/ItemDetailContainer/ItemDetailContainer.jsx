import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (products) {
      const product = products.find((p) => p.id == id);
      console.log(product);
    }
  }, [id]);

  return <div>ItemDetailContainer</div>;
}

export default ItemDetailContainer;
