import React from "react";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Home/components/Navbar";
import Products from "./Home/components/Products";
import Product from "./Home/components/Product.jsx";
import Cart from "./Home/components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
