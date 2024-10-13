import { Card, CardContent, Typography } from "@mui/material";

const Product = ({ name, description }) => {
  return (
    <Card sx={{ m: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
