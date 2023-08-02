"use client";
import React from "react";
import { useRouter } from "next/navigation";
const About = () => {
	const route = useRouter();
	return (
		<div>
			<h1>About Page</h1>
			{/** routing using useRouter hook */}
			<button
				className="bg-blue-500 text-white rounded-md p-2 m-2"
				onClick={() => route.push("/")}
			>
				go back
			</button>
		</div>
	);
};

export default About;
