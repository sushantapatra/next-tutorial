"use client";
import React from "react";

const Product = ({ price, title }) => {
	return (
		<div className=" w-1/4 bg-gray-200 rounded p-8 m-6">
			<h3>Name : {title}</h3>
			<h4>Price : {price}</h4>
			<button
				className="bg-blue-700 text-white rounded-md p-2 m-2"
				onClick={() => alert()}
			>
				Check Price
			</button>
		</div>
	);
};

export default Product;
