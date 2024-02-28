import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((res, reject) => {
      res(products);
    });

    tarea.then((res) => setItems(res));
  }, []);
  console.log(items);

  return <ItemList saludo={greeting} items={items} />;
}

export default ItemListContainer;
