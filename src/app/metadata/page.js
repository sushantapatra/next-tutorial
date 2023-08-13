import React from "react";

const Metadata = () => {
	return (
		<div>
			<h1>GenerateMetadata for Dynamic meta</h1>
		</div>
	);
};

function generateMetadata({ params }) {
	return {
		title: "Dynamic Meta data",
		desciption: "new Dynamic Metadata Description",
	};
}
export default Metadata;
export { generateMetadata };
