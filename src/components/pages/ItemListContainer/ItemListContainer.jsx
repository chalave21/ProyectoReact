import React from "react";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  return <ItemList saludo={greeting} />;
}

export default ItemListContainer;
