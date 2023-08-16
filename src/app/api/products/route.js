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

export async function POST(request, response) {
	//getting json data
	const payload = await request.json();
	console.log(payload);
	try {
		connectDB();
		const newProduct = new productModel(payload);
		const result = await newProduct.save();
	} catch (error) {
		//console.log(error);
	}
}
