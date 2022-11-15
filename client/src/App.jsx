import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navbar from "./components/Navbar";
import Register from "./pages/Register.jsx";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import InserCanciones from "./pages/InserCanciones";
// import Songs from "./components/Songs.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Songs/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/" element={<UserPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/InserSongs" element={<InserCanciones />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
