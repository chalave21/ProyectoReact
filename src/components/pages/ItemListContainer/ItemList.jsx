import React from "react";
import "./ItemListContainer.css";

function ItemList({ saludo }) {
  return (
    <div className="item-list-container">
      <p className="greeting">{saludo}</p>
    </div>
  );
}

export default ItemList;
