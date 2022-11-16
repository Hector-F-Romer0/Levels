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
import InserAlbum from "./pages/InserAlbum";
import InserGenero from "./pages/InserGenero";
import { DataProvider } from "./context/DataContext";

const App = () => {
	return (
		<DataProvider>


			<div className="container">
				
			</div>


			<CancionesProvider>
			<BrowserRouter>
				<Navbar />
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
					<Route path="/InserGenero" element={<InserGenero/>} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</CancionesProvider>
		</DataProvider>
		
	);
	
};

export default App;
