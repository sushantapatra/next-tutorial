import React from "react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
	weight: "600",
	subsets: ["latin"],
	display: "swap",
});
const FontComponent = () => {
	return (
		<div>
			<h1>Font Optimization in Next.JS</h1>
			<h2 style={{ fontFamily: "Raleway", fontSize: "4rem" }}>
				Nor font impliment by google font, in traditional way
			</h2>

			<h1 className={raleway.className}>
				Google font loading by next js way
			</h1>
		</div>
	);
};

export default FontComponent;
