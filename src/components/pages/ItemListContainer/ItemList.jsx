import React from "react";
import "./ItemListContainer.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ItemList({ saludo, items }) {
  return (
    <div className="item-list-container">
      <p className="greeting">{saludo}</p>
      {items.map((item) => (
        <div className="cardContainer">
          <Card className="card" key={item.id}>
            <CardMedia
              component="img"
              alt={item.title}
              height="140"
              width="200px"
              image={item.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descripción: {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Precio: ${item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Stock: {item.stock}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Categorías: {item.categories.join(", ")}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
