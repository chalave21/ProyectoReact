import React, { useState } from "react";
import ItemCount from "./ItemCount";
function CountContainer() {
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
  return <ItemCount addOne={addOne} subOne={subOne} count={item} />;
}

export default CountContainer;
