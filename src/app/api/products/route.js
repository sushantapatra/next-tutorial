import { NextResponse } from "next/server";
import connectDB from "@/utils/dnconnection";
import productModel from "@/utils/models/productModel";
export async function GET() {
	let data = [];
	try {
		//connectDB();
		data = await productModel.find();
	} catch (error) {
		console.log(error);
		data = { success: false };
	}
	return NextResponse.json({ data: data }, { status: 200 });
}
