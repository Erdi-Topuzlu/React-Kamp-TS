import * as React from "react";
import StickyFooter from "./Components/Footer/StickyFooter";
import NavBar from "./Components/Header/NavBar";
import Homepage from "./Pages/Homepage/Homepage";
import Products from "./Pages/Product/Products";
import { Route, Routes } from "react-router-dom";
import Categories from "./Pages/Categories/Categories";
import CartDetail from "./Pages/Cart/Cart-Detail";
import ProductDetail from "./Pages/Product/Product-Detail";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="product-detail/:id" element={<ProductDetail/>} />        
        <Route path="cart-detail" element={<CartDetail/>} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      <StickyFooter />
    </>
  );
}
