import { React, useState } from "react";
import Count from "./ItemCount";

function CountContainer({ onAdd, stock, total = 1 }) {
  const [item, setItem] = useState(total);

  function addOne() {
    if (item < stock) {
      setItem(item + 1);
    }
  }

  function subOne() {
    if (item > 1) {
      setItem(item - 1);
    }
  }
  return (
    <Count
      addOne={addOne}
      subOne={subOne}
      count={item}
      onAdd={onAdd}
      stock={stock}
    />
  );
}

export default CountContainer;
