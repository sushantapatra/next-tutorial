"use client";
import React, { useState } from "react";

const AddUser = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");

	const addUser = async (e) => {
		e.preventDefault();
		let response = await fetch("http://localhost:3000/api/users", {
			method: "post",
			body: JSON.stringify({ name, age, email }),
		});
		response = await response.json();
		if (response.success) {
			alert(response.result);
		} else {
			console.log(response.error);
			for (var key in response.error) {
				var value = response.error[key];
				console.log(value);
				alert(value);
			}
			//alert(response.error);
		}
		//console.log(response);
	};
	return (
		<div>
			<h1>Add User Form </h1>
			<form action="">
				Name :
				<input
					type="text"
					name="name"
					className="border border-gray-400 p-1 m-1"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				Age :{" "}
				<input
					type="number"
					name="age"
					className="border border-gray-400 p-1 m-1"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
				Email :{" "}
				<input
					type="email"
					name="email"
					className="border border-gray-400 p-1 m-1"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button
					className="bg-blue-700 text-white rounded-md p-2 m-2"
					onClick={addUser}
				>
					Save
				</button>
			</form>
		</div>
	);
};

export default AddUser;
