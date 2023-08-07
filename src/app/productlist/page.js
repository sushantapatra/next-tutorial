import React from "react";
import Product from "./Product";
async function productList() {
	let data = await fetch("https://dummyjson.com/products");
	data = await data.json();
	return data.products;
}
const ProductList = async () => {
	let products = await productList();
	//console.log(products);
	return (
		<div>
			<h1 className="text-2xl">Product List</h1>
			{products.map((item) => {
				return <Product price={item.price} title={item.title} />;
			})}
		</div>
	);
};

export default ProductList;
