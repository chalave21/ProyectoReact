import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { addCart } = useContext(CartContext);

  useEffect(() => {
    const tarea = new Promise((res, rej) => {
      if (products) {
        const product = products.find((p) => {
          return p.id === parseInt(id);
        });
        if (product) {
          res(product);
        } else {
          rej(new Error("No se encontró el producto"));
        }
      }
    });

    tarea
      .then((res) => {
        setItem(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let productInfo = {
      ...item,
      quantity: cantidad,
    };
    addCart(productInfo);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
}

export default ItemDetailContainer;
