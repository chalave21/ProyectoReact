import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
  "& .MuiBadge-badge.MuiBadge-colorSecondary": {
    backgroundColor: "orange",
  },
  " & .MuiSvgIcon-root": {
    color: "white",
  },
}));
function Cartwidget() {
  const { getTotalItem } = useContext(CartContext);
  let total = getTotalItem();
  return (
    <div>
      <IconButton
        aria-label="cart"
        // sx={{
        //   color: "white",
        // }}
      >
        <StyledBadge badgeContent={total} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
}

export default Cartwidget;
