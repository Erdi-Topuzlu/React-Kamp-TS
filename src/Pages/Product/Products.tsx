import { Chip, Container, Divider, Grid } from "@mui/material";
import * as React from "react";
import { productModel } from "../../Models/productModel";
import productService from "../../Services/productService";
import ProductCard from "./ProductCard";
import Breadcrumb from "../../Components/Header/Breadcrumb";

type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = React.useState<productModel[]>([]);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const onProductDelete = (id: number) => {
    setProducts(products.filter((i) => i.id !== id));
  };

  const fetchProducts = () => {
    productService.getAll().then((response: any) => {
      setProducts(response.data.products);
    });
  };

  return (
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
        <Divider>
          <h3>Products</h3>
        </Divider>

        <Breadcrumb />
        <Divider />
      </Container>

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Grid key={product.id} item xs={4} sm={4} md={4}>
            <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
              <ProductCard onDelete={onProductDelete} product={product} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
