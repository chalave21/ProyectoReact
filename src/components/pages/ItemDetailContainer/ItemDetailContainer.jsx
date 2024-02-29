import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    if (products) {
      const product = products.find((p) => {
        return p.id == parseInt(id);
      });
      setItem(product);
      console.log(product);
    }
  }, [id]);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
