import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ServicePage from "./pages/ServicePage";
import HistoryPage from "./pages/HistoryPage";
import BookServicePage from "./pages/BookServicePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/book" element={<BookServicePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
