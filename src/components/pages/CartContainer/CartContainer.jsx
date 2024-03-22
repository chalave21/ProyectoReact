import { Button, Typography, Grid } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function CartContainer() {
  const { cart, clearCart, removeById } = useContext(CartContext);

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {cart.map((p, index) => (
          <Grid item xs={12} key={p.id}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Grid item>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" component="h2">
                  {p.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {p.description}
                </Typography>
                <Typography variant="body1">Precio: ${p.price}</Typography>
                <Typography variant="body1">Cantidad: {p.quantity}</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeById(p.id)}
                >
                  Eliminar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="flex-end"
        sx={{ marginTop: "20px" }}
      >
        <Grid item>
          <Link to={"/Checkout"} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Terminar compra
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={clearCart}>
            Limpiar carrito
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CartContainer;
