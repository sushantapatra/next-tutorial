import styles from "./page.module.css";
export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Home Page</h1>
			{/** Data passing in component */}
			<User name="Sushnat" />
			<User name="Harekrushna" />
			<Name name="Rajbeer" />
			<Name name="Harisankar" />
		</main>
	);
}

/**
 *Data passing in component
 */
//without object disturaction
const Name = (props) => {
	return (
		<div>
			<h1>Name Component</h1>
			<h1>My Name is {props.name}</h1>
		</div>
	);
};

// object disstructing
const User = ({ name }) => {
	console.log(name);
	return (
		<div>
			<h1>User Component</h1>
			<h1>User name is {name}</h1>
		</div>
	);
};
