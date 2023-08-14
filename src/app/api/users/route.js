import { user } from "@/utils/db";
import { NextResponse } from "next/server";

//users list api
export async function GET(request) {
	const data = user;
	return NextResponse.json(data, { status: 200 });
}

export async function POST(request, response) {
	//getting json data
	const payload = await request.json();
	//console.log(payload);
	const error = {};
	if (!payload.name) {
		error.name = "Name field is required";
	}
	if (!payload.age) {
		error.age = "Age field is required";
	}
	if (!payload.email) {
		error.email = "Email field is required";
	}
	if (Object.keys(error).length === 0) {
		return NextResponse.json(
			{
				result: "User Created Successfully",
				success: true,
				data: payload,
			},
			{ status: 201 }
		);
	} else {
		return NextResponse.json(
			{ error: error, success: false },
			{ status: 400 }
		);
	}
}
