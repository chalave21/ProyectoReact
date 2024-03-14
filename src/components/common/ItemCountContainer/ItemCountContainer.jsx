import { React, useState } from "react";
import Count from "./ItemCount";

function CountContainer({ onAdd }) {
  const [item, setItem] = useState(1);

  function addOne() {
    if (item < 10) {
      setItem(item + 1);
    }
  }

  function subOne() {
    if (item > 1) {
      setItem(item - 1);
    }
  }
  return <Count addOne={addOne} subOne={subOne} count={item} onAdd={onAdd} />;
}

export default CountContainer;
