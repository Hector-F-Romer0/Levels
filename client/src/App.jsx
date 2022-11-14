import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navbar from "./components/Navbar";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login";
import InserCanciones from "./pages/InserCanciones";
import InserArtist from "./pages/InserArtist";
import InserAlbum from "./pages/InserAlbum";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/" element={<UserPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/InserSongs" element={<InserCanciones />} />
        <Route path="/InserArtist" element={<InserArtist />} />
        <Route path="/InserAlbum" element={<InserAlbum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
