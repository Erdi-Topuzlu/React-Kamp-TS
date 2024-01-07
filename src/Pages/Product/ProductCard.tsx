import { productModel } from "../../Models/productModel";
import productService from "../../Services/productService";
import { HttpStatusCode } from "axios";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  product: productModel;
  onDelete: (id: number) => void;
  title?: string;
};

function ProductCard(props: Props) {
  const deleteProduct = async () => {
    try {
      let response = await productService.delete(250);
      if (response.status == HttpStatusCode.Ok) {
        props.onDelete(props.product.id);
        alert("Veri başarıyla silindi.");
      }
    } catch (e) {
      alert("Veri silinemedi");
    }
  };

  return (
    <Container maxWidth="lg">
      <Card sx={{ maxWidth: 345 }} key={props.product.id}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 150 }}
            component="img"
            height="140"
            image={props.product.thumbnail}
            alt={props.product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.product.title}
            </Typography>
            <Typography variant="body2" noWrap color="text.secondary">
              {props.product.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Link to={"/product-detail/" + props.product.id}>
                <Button size="small" color="primary">
                  Details
                </Button>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="button" color="text.secondary">
                $ {props.product.price}
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Container>
  );
}

export default ProductCard;
