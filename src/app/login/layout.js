"use client";
import React from "react";
import Link from "next/link";
import styles from "./login.module.css";
import { usePathname } from "next/navigation";

const LoginLayout = ({ children }) => {
	const currentPath = usePathname();
	console.log(currentPath);
	return (
		<div className="md:container md:mx-auto">
			{currentPath !== "/login/teacherlogin" ? (
				<ul className="flex space-x-4 p-4 bg-slate-200 shadow items-center">
					<li>
						<h1 className="text-2xl">Login Navbar</h1>
					</li>
					<li className="hover:text-sky-700">
						<Link href="/login">Main Login</Link>
					</li>
					<li className="hover:text-sky-700">
						<Link href="/login/studentlogin">Student Login</Link>
					</li>
					<li className="hover:text-sky-700">
						<Link href="/login/teacherlogin">Teacher Login</Link>
					</li>
				</ul>
			) : (
				<ul className="flex space-x-4 p-4 bg-slate-200 shadow items-center">
					<li>
						<h1 className="text-2xl">Login Navbar</h1>
					</li>
					<li>
						<Link href="/login">Main login</Link>
					</li>
				</ul>
			)}
			{children}
		</div>
	);
};

export default LoginLayout;
