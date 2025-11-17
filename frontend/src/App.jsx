import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

// User pages
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Product from "./pages/Product/Product";
import Categories from "./pages/Categories/Categories";
import NewArrivals from "./pages/NewArrivals/NewArrivals";
import Shop from "./pages/Shop/Shop";

// Admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminHome from "./pages/Admin/AdminHome.jsx";
import ManageProducts from "./pages/Admin/ManageProducts.jsx";
import ManageOrders from "./pages/Admin/ManageOrders.jsx";

// Admin protection
import AdminProtectedRoute from "./components/ProtectedRoutes/AdminProtectedRoute";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app">
        {/* Top Banner */}
        <div className="code">GET 10% OFF ON YOUR FIRST PURCHASE</div>

        {/* Navbar */}
        <Navbar setShowLogin={setShowLogin} />

        {/* Routes */}
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Home
                section={new URLSearchParams(window.location.search).get("scroll")}
              />
            }
          />

          {/* User Pages */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shop" element={<Shop />} />

          {/* -------------------------------- */}
          {/*          ADMIN ROUTES             */}
          {/* -------------------------------- */}
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminDashboard />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<AdminHome />} />
            <Route path="products" element={<ManageProducts />} />
            <Route path="orders" element={<ManageOrders />} />
          </Route>
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;