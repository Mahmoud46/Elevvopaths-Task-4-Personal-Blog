import { useEffect, useState, type ReactNode } from "react";
import styles from "./Header.module.scss";
import mzLogo from "../../assets/mz.svg";
import { toggleTheme } from "../../libs/utils";
import { Link } from "react-router-dom";

export default function Header({
	dataTheme,
	setDataTheme,
}: {
	dataTheme: "dark" | "light";
	setDataTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}): ReactNode {
	const [isScroll, setIsScroll] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 1) setIsScroll(true);
			else setIsScroll(false);
		});
	});

	return (
		<header className={isScroll ? styles.scroll : ""}>
			<Link to={"/"} className={styles.logo}>
				<img src={mzLogo} alt="logo" />
				<span>Blog</span>
			</Link>
			<div className={styles["toggle-theme"]}>
				<span
					className="material-symbols-outlined"
					onClick={() => {
						setDataTheme((prev) => (prev == "dark" ? "light" : "dark"));
						toggleTheme();
					}}
				>
					{dataTheme == "dark" ? "brightness_empty" : "dark_mode"}
				</span>
			</div>
		</header>
	);
}
