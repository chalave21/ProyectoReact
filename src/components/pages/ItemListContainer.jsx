import React from "react";
import "../pages/ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <p className="greeting">{greeting}</p>
    </div>
  );
}

export default ItemListContainer;
