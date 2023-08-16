import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is require"],
		},
		price: {
			type: String,
			required: [true, "Price is require"],
		},
		company: {
			type: String,
			required: [true, "Company is require"],
		},
		color: {
			type: String,
			required: [true, "Color is require"],
		},
		category: {
			type: String,
			required: [true, "Category is require"],
		},
	},
	{ timestamp: true }
);

const productModel =
	mongoose.models.products || mongoose.model("products", productSchema);
export default productModel;
