import { Button } from "@mui/material";
import { Link } from "react-router-dom";
function CartContainer() {
  return (
    <>
      <Link to={"/Checkout"}>
        <Button variant="contained">Terminar compra</Button>
      </Link>
    </>
  );
}

export default CartContainer;
