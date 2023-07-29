"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
	const [name, setName] = useState("");
	function Greeting() {
		alert("Welcome to Next");
	}
	const Hello = () => {
		alert("Hello, How are you.");
	};
	const Name = (username) => {
		setName(username);
		alert("My name is :" + username);
	};
	//component ke  andar component
	const InnerComponent = () => {
		return (
			<div>
				<h1>Hi I am Inner Component</h1>
			</div>
		);
	};
	return (
		<main className={styles.main}>
			<h1>Events, Functions and State {name}</h1>
			<button
				className="bg-blue-700 text-white rounded-md p-2 m-2"
				onClick={() => Greeting()}
			>
				Normal Function
			</button>
			<button
				className="bg-blue-700 text-white rounded-md p-2 m-2"
				onClick={Hello}
			>
				Arrow Function
			</button>
			<button
				className="bg-blue-700 text-white rounded-md p-2 m-2"
				onClick={() => Name("Sushanta")}
			>
				Arrow Function with passing argument
			</button>

			{/** Inner Componet calling as normal way*/}
			<InnerComponent />
			{/** Inner Componet calling as a function*/}
			{InnerComponent()}
		</main>
	);
}

/**
 *Data passing in component
 */
