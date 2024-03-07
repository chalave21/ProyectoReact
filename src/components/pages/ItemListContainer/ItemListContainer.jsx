import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useParams } from "react-router";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const tarea = new Promise((res, reject) => {
      if (category) {
        const product = products.filter((p) => {
          return p.categories[0] === category;
        });
        res(product);
      } else {
        res(products);
      }
    });

    tarea.then((res) => {
      setItems(res);
    });
  }, [category]);

  return <ItemList saludo={greeting} items={items} />;
}

export default ItemListContainer;
