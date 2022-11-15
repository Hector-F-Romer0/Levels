import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import { CancionesProvider } from "./context/CancionesContext";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import NavBar from "./components/NavBar";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login";
import InserCanciones from "./pages/InserCanciones";
import InserArtist from "./pages/InserArtist";
import InserAlbum from "./pages/InserAlbum";

const App = () => {
	return (
		<CancionesProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/user/" element={<UserPage />} />
					<Route path="/user/:id" element={<UserPage />} />
					<Route path="*" element={<NotFoundPage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/inserSongs" element={<InserCanciones />} />
					<Route path="/inserArtist" element={<InserArtist />} />
					<Route path="/inserAlbum" element={<InserAlbum />} />
					<Route path="/songs/:isrc" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</CancionesProvider>
	);
};

export default App;
