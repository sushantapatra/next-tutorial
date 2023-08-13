"use client";
import Script from "next/script";
import React from "react";

const ScriptComponent = () => {
	return (
		<div>
			<Script
				src="/location.js"
				onLoad={() => console.log("loading...")}
			/>
			<h1>Script Component loading</h1>
		</div>
	);
};

export default ScriptComponent;
