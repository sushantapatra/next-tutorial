import React from "react";
import Link from "next/link";

const NotFound = () => {
	return (
		<div>
			<h1>404 Page not found inside about path</h1>
			<Link href="/about" className="p-2 m-2 bg-slate-200 mt-11rounded-md">
				Go to About PAge
			</Link>
		</div>
	);
};

export default NotFound;
