import React from "react";
import Counter from "./Counter";
import { Button } from "bootstrap";



const Home = () => {
	return (
		<div className="text-center d-flex justify-content-center ">
			<h1 className="text-center mt-5">Time Counter</h1>
			<Counter />
		</div>
	);
};

export default Home;