import React from "react";

async function userList() {
	let data = await fetch("https://dummyjson.com/users");
	data = await data.json();
	return data.users;
}
const LoderComponent = async () => {
	let users = await userList();
	//console.log(users);
	return (
		<div>
			<h1>Loader Component</h1>
			<h3>User List</h3>
			{users.map((user) => {
				return (
					<div>
						<h3>
							{user.firstName} {user.maidenName} {user.lastName}
						</h3>
					</div>
				);
			})}
		</div>
	);
};

export default LoderComponent;
