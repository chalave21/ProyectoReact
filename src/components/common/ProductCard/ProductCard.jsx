import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
export function ProductCard({
  title,
  img,
  description,
  price,
  stock,
  categories,
}) {
  return (
    <div className="cardContainer">
      <Card className="card">
        <CardMedia
          component="img"
          alt={title}
          height="140"
          width="200px"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>Descripción:</span> {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>Precio:</span> ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>Stock:</span> {stock}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>Categorías:</span> {categories && categories.join(", ")}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;
