import Link from "next/link";
import React from "react";
const getUsersDetails = async (userid) => {
	let data = await fetch("http://localhost:3000/api/users/" + userid);
	data = await data.json();
	return data[0];
};
const UserDetail = async ({ params }) => {
	//console.log(params.userid);
	let item = await getUsersDetails(params.userid);
	//console.log(item);
	return (
		<div>
			<h1>User Details</h1>
			<div className="bg-gray-200 shadow m-4 p-4 md:w-1/4">
				<h3 className="text-green-400 text-2xl">Name : {item.name}</h3>
				<h3>Age : {item.age}</h3>
				<h3>Email : {item.email}</h3>
			</div>
		</div>
	);
};

export default UserDetail;
