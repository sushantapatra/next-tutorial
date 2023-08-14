import React from "react";

const EnvironmentComponemt = () => {
	//console.log(process.env); //access all environment variables
	console.log(process.env.NODE_ENV);
	/**
	 * create a .env or .env.local or .env.live
	 * declare your  a variables
	 * access with process.env.[variablename]
	 */
	console.log(process.env.SERVER_PASSWORD);
	return (
		<div>
			<h1>Environment Variable in Next.Js</h1>
			<p>Read all Environment Variables</p>
		</div>
	);
};

export default EnvironmentComponemt;
