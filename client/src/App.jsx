import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import { CancionesProvider } from "./context/CancionesContext";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navbar from "./components/Navbar";
import Register from "./pages/Register.jsx";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import InserCanciones from "./pages/InserCanciones";
import InserArtist from "./pages/InserArtist";
import InsertAlbum from "./pages/InsertAlbum";
import InserGenero from "./pages/InserGenero";
import HomeAdmin from "./pages/HomeAdmin";

import { UserProvider } from "./context/UserContext";

const App = () => {
	return (
		<UserProvider>
			<CancionesProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/userView" element={<HomePage />} />
						<Route path="/user/" element={<UserPage />} />
						<Route path="/user/:id" element={<UserPage />} />
						<Route path="*" element={<NotFoundPage />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/inserSongs" element={<InserCanciones />} />
						<Route path="/inserArtist" element={<InserArtist />} />
						<Route path="/insertAlbum" element={<InsertAlbum />} />
						<Route path="/songs/:isrc" element={<Login />} />
						<Route path="/InserGenero" element={<InserGenero />} />
						<Route path="/HomeAdmin" element={<HomeAdmin />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CancionesProvider>
		</UserProvider>
	);
};

export default App;
