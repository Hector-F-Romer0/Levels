import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/" element={<UserPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
