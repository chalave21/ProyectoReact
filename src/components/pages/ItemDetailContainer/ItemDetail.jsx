import React from "react";
import ProductCard from "../../common/ProductCard/ProductCard";
import "./ItemDetailContainer.css";

function ItemDetail({ item }) {
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
      </div>
    </>
  );
}

export default ItemDetail;
