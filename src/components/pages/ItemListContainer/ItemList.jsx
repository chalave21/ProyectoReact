import "./ItemListContainer.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import { Link } from "react-router-dom";

function ItemList({ saludo, items }) {
  return (
    <>
      {<p className="greeting">{saludo}</p>}
      <div className="item-list-container">
        {items.map(
          ({ id, title, img, description, price, stock, categories }) => (
            <Link key={id} to={`/Detail/${id}`}>
              <ProductCard
                key={id}
                title={title}
                img={img}
                description={description}
                price={price}
                categories={categories}
                stock={stock}
              />
            </Link>
          )
        )}
      </div>
    </>
  );
}

export default ItemList;
