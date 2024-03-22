import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Cartwidget() {
  const { getTotalItem } = useContext(CartContext);
  let total = getTotalItem();
  return (
    <div>
      <AddShoppingCartIcon />
      <p>{total}</p>
    </div>
  );
}

export default Cartwidget;
