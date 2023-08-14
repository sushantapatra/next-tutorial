import { user } from "@/utils/db";
import { NextResponse } from "next/server";

//users details api
export async function GET(request, { params }) {
	//get params data
	//console.log(params.id);
	//console.log(content.params.id);
	const userData = user.filter((item) => item.id == params.id);
	if (userData.length > 0)
		return NextResponse.json(userData, { status: 200 });

	return NextResponse.json({ result: "Not found." }, { status: 404 });
}
