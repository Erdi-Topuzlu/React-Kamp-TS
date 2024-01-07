import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productModel } from "../../Models/productModel";
import productService from "../../Services/productService";
import SellIcon from "@mui/icons-material/Sell";
import DescriptionIcon from "@mui/icons-material/Description";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Breadcrumb from "../../Components/Header/Breadcrumb";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/AppHooks";
import { IncreasingCartNumber } from "../../Store/Actions/cartActions";

type Props = { product: productModel };

const ProductDetail = (props: Props) => {
  const params = useParams<{ id: string }>(); // location
  const [product, setProduct] = useState<productModel>();

  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.cartItem.value);
  const action: IncreasingCartNumber = {
    type: "INCREASING_CART_NUMBER",
    payload: 1,
  };

  const handleAddToCart = () => {
    dispatch(action);
  };

  useEffect(() => {
    if (params.id) {
      productService.getById(parseInt(params.id)).then((response) => {
        setProduct(response.data);
      });
    }
  }, [params.id]);
  const [rating, setRating] = React.useState<number | null>(4);
  const actualRating = rating !== undefined ? rating : 0;
  return (
    <>
      <Container maxWidth="lg">
        <Container
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
          maxWidth="lg"
        >
          <Breadcrumb category={product?.category} productId={product?.id} />
          <Divider />

          <Grid>
            <Grid sx={{ mt: 6, mb: 2 }} item xs={4}>
              <Grid columns={{ xs: 1, sm: 8, md: 12 }}>
                <img src={product?.images[0]} />

                <></>
              </Grid>
            </Grid>
            <Grid style={{ marginTop: "10px" }} item xs={4}>
              <Grid columns={{ xs: 4, sm: 8, md: 12 }}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  {product?.title}
                </Typography>
                <Divider />
              </Grid>
              <Grid
                container
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid style={{ marginTop: "10px" }} item xs={6}>
                  <Grid columns={{ xs: 4, sm: 8, md: 12 }}>
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <SellIcon color="primary" />
                        </ListItemAvatar>
                        <ListItemText primary={product?.brand} />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <CategoryIcon color="primary" />
                        </ListItemAvatar>
                        <ListItemText primary={product?.category} />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <DescriptionIcon color="primary" />
                        </ListItemAvatar>
                        <ListItemText primary={product?.description} />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <InventoryIcon color="primary" />
                        </ListItemAvatar>
                        <ListItemText primary={product?.stock} />
                      </ListItem>
                      <ListItem>
                        <ListItemAvatar>
                          <AttachMoneyIcon color="primary" />
                        </ListItemAvatar>
                        <ListItemText primary={product?.price} />
                      </ListItem>
                    </List>
                    <Grid item xs={8}>
                      
                        <Button size="small" color="primary" onClick={handleAddToCart}>
                          Add to Cart
                        </Button>
                  
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default ProductDetail;
