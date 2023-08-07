import React from "react";
import { NextResponse } from "next/server";
const Middleware = (request) => {
	//console.log(request);
	//if (request.nextUrl.pathname != "/login") {
	return NextResponse.redirect(new URL("/login", request.url));
	//}
};

/**
 * config file auto matic middle ware detect
 */
export const config = {
	matcher: ["/about/:path*", "/language/:path*"],
};

export default Middleware;
