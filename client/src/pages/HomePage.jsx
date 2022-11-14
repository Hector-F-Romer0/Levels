import React from "react";

import FormSubirImg from "../components/FormSubirImg";
import Songs from "../components/Songs";

const HomePage = () => {
	return (
		<div className="">
			{/* <FormSubirImg /> */}
			<dir className="container">
				<Songs />
				<Songs />
			</dir>
		</div>
	);
};

export default HomePage;
