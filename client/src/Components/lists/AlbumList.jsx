import React, { useEffect, useState } from "react";
import { getAlbumesRequest } from "../../api/albums.api";

const AlbumList = () => {
	const [albumes, setAlbumes] = useState([]);
	const [loading, setLoading] = useState();

	useEffect(() => {
		cargarAlbumes();
	}, []);

	const cargarAlbumes = async () => {
		setLoading(true);
		const res = await getAlbumesRequest();
		setAlbumes(res.data);
		setLoading(false);
	};

	return (
		<>
			<select className="InputSong">
				{albumes.map((item) => {
					return <option key={item.idAlbum}>{item.titulo}</option>;
				})}
			</select>
		</>
	);
};

export default AlbumList;
