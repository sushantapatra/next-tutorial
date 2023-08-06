"use client";
import React from "react";

const Lactures = ({ params }) => {
	console.log(params);
	return (
		<div>
			<h1>Lactures 1</h1>
			<p>
				{params.lectures[0]} - {params.lectures[1]}
			</p>
		</div>
	);
};

export default Lactures;
