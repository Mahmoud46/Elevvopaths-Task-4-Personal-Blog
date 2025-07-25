import styles from "./Footer.module.scss";
import mzLogo from "../../assets/mz.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import githubLogo from "../../assets/github.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<footer>
			<Link to={"/"} className={styles.brand}>
				<img src={mzLogo} alt="MZ" loading="lazy" />
			</Link>
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 20,
					duration: 0.4,
				}}
				viewport={{ once: false, amount: 0.2 }}
				className={styles.social}
			>
				<a
					href="https://www.linkedin.com/in/mahmoud-zakaria-9a9a11304/"
					target="__blank"
				>
					<img src={linkedinLogo} alt="linkedin" />
				</a>
				<a href="https://github.com/Mahmoud46" target="__blank">
					<img src={githubLogo} alt="github" />
				</a>
			</motion.div>
		</footer>
	);
}
