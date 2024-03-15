import { useState } from "react";
import Checkout from "./Checkout";
function CheckoutContainer() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const envioDeFormulario = (e) => {
    e.preventDefault();
    console.log(name);
  };

  const capturaNombre = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  return (
    <>
      <Checkout
        envioDeFormulario={envioDeFormulario}
        capturaNombre={capturaNombre}
      />
      ;
    </>
  );
}

export default CheckoutContainer;
