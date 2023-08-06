import React from "react";
import Link from "next/link";
import styles from "./login.module.css";

const LoginLayout = ({ children }) => {
	return (
		<div className="md:container md:mx-auto">
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
			{children}
		</div>
	);
};

export default LoginLayout;
