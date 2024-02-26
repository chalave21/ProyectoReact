import "./ItemListContainer.css";
import ProductCard from "../../common/ProductCard/ProductCard";

function ItemList({ saludo, items }) {
  return (
    <>
      {<p className="greeting">{saludo}</p>}

      <div className="item-list-container">
        {items.map(
          ({ id, title, img, description, price, stock, categories }) => (
            <ProductCard
              key={id}
              title={title}
              img={img}
              description={description}
              price={price}
              categories={categories}
              stock={stock}
            />
          )
        )}
      </div>
    </>
  );
}

export default ItemList;
