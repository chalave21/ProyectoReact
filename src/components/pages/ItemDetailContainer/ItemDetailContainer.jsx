import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const tarea = new Promise((res, err) => {
      if (products) {
        const product = products.find((p) => {
          return p.id == parseInt(id);
        });
        res(product);
        err(console.log("No se encontro el producto"));
      }
    });
    tarea.then((res) => {
      setItem(res);
    });
    tarea.catch((err) => console.log(err));
  }, [id]);

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
