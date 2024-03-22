import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cartwidget() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <AddShoppingCartIcon />
      <p>{cart.length}</p>
    </div>
  );
}

export default Cartwidget;
