import React from "react";
import Counter from "./Counter";
import { Button } from "bootstrap";



const Home = () => {
	return (
		<div className="text-center d-flex justify-content-center align-items-center flex-column">
			<div clasName="w-25">
				<h1 className="text-center mt-5">Time Counter</h1>
				<Counter />
			</div>
		</div>
	);
};

export default Home;