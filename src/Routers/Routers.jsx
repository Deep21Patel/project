import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Login from "../Pages/Login";
import Shop from "../Pages/Shop";
import ProductDetails from "../Pages/ProductDetails";
import Singup from "../Pages/Singup";
import ProtectedRoute from "./ProtectedRoute";
import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";

function Router(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="/*" element={<ProtectedRoute />}>
          <Route path="Checkout" element={<Checkout />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="dashboard/all-products" element={<AllProducts />}></Route>
        <Route path="dashboard/add-products" element={<AddProducts />}></Route>
        <Route path="dashboard/Users" element={<Users />}></Route>
        <Route path="Login" element={<Login />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Shop/:id" element={<ProductDetails />} />
        <Route path="Singup" element={<Singup />} />
      </Routes>
    </>
  );
}

export default Router;
