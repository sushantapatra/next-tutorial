import React from "react";

const Language = ({ params }) => {
	console.log(params);
	return (
		<div>
			<h1>Dynamic Routing</h1>
			<h1>Language {params.name}</h1>
		</div>
	);
};

export default Language;
