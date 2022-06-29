import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
	return (
		<nav id={styles.nav}>
			<h1>
				<Link href="/">Go home</Link>
			</h1>
		</nav>
	);
}
