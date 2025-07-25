import type { ReactNode } from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";
export default function NotFound(): ReactNode {
	return (
		<section className={styles["not-found"]}>
			<h1>404</h1>
			<h2>
				Oops! Page not found. Let’s get you back on track — maybe start from the
				homepage?
			</h2>
			<Link to={"/"}>
				<p>Return to Safety</p>
				<span className="material-symbols-outlined">arrow_outward</span>
			</Link>
		</section>
	);
}
