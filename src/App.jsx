import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import Products from "./pages/admin/products/Products";
import Users from "./pages/admin/users/Users";
import Posts from "./pages/admin/posts/Posts";
import Contact from "./pages/admin/contact/Contact";
import Agents from "./pages/admin/agents/Agents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="products" element={<Products />} />
            <Route path="users" element={<Users />} />
            <Route path="posts" element={<Posts />} />
            <Route path="contact" element={<Contact />} />
            <Route path="agents" element={<Agents />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
