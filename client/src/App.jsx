import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import NavBar from "./components/Navbar.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/user/" element={<UserPage />} />
				<Route path="/user/:id" element={<UserPage />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
