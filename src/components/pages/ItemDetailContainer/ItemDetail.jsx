import React from "react";
import ProductCard from "../../common/ProductCard/ProductCard";
import "./itemDetailContainer.css";
import ItemCountContainer from "../../common/ItemCountContainer/ItemCountContainer";

function ItemDetail({ item, onAdd, total }) {
  return (
    <>
      <div className="item-list-container">
        <ProductCard
          key={item.id}
          title={item.title}
          img={item.img}
          description={item.description}
          price={item.price}
          categories={item.categories}
          stock={item.stock}
        />
        <ItemCountContainer onAdd={onAdd} total={total} stock={item.stock} />
      </div>
    </>
  );
}

export default ItemDetail;
