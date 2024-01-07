import * as React from "react";
import Link from "@mui/material/Link";
import { Breadcrumbs } from "@mui/material";
import { productModel } from "../../Models/productModel";
import productService from "../../Services/productService";

type Props = {category?: any,
productId?: any};



function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

const Breadcrumb = (props: Props) => {



  const [products, setProducts] = React.useState<productModel[]>([]);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  

  const fetchProducts = () => {
    productService.getAll().then((response: any) => {
      setProducts(response.data.products);
    });
  };

  return (
    <div>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Homepage
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/products"
          >
            Products
          </Link>
          
          
          <Link
            underline="hover"
            color="text.primary"
            href={"/product-detail/" + props.productId}
            aria-current="page"
          >
           {props.category}
          
          </Link>
        
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Breadcrumb;
