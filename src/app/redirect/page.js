import React from "react";
import { redirect } from "next/navigation";

const RedirecrComponent = () => {
	//redirect to homepage
	//redirect("/");
	return (
		<div>
			<h1>Redirect Component</h1>
			<p>using redirect() method</p>
			<p>using next config file</p>
		</div>
	);
};

export default RedirecrComponent;
