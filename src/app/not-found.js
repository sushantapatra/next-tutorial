import React from "react";
import Link from "next/link";

const NotFound = () => {
	return (
		<div>
			<h1>404 not found</h1>
			<p>
				you have to create a specific "not-found.js" page. you have
				create a 404 not found page you create not-found.js page. you
				have a other name it's not work.
			</p>
			<Link href="/" className="p-2 m-2 bg-slate-200 rounded">
				Go to Home page
			</Link>
		</div>
	);
};

export default NotFound;
