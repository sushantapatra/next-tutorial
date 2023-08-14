import Link from "next/link";
import React from "react";
const getUsers = async () => {
	let data = await fetch("http://localhost:3000/api/users");
	data = await data.json();
	return data;
};
const User = async () => {
	let users = await getUsers();
	return (
		<div>
			<h1>User List</h1>
			<div className="flex flex-grow flex-row  flex-wrap">
				{users.map((item) => {
					return (
						<div className="bg-gray-200 shadow m-4 p-4 md:w-1/4">
							<h3 className="text-green-400 text-2xl">
								<Link href={`users/${item.id}`}>
									Name : {item.name}
								</Link>
							</h3>
							<h3>Age : {item.age}</h3>
							<h3>Email : {item.email}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default User;
