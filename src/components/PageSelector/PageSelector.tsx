import { useContext, type ReactNode } from "react";
import { Context } from "../../context/Contex";
import type { IContext } from "../../interface/Interfaces";
import { useNavigate } from "react-router-dom";
import styles from "./PageSelector.module.scss";
import { motion } from "framer-motion";

export default function PageSelector({
	maxNumberOfPages,
}: {
	maxNumberOfPages: number;
}): ReactNode {
	const { postsPageNumber, setPostsPageNumber } = useContext(
		Context
	) as IContext;
	const navigate = useNavigate();

	return (
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
			className={styles["page-selector"]}
		>
			<button
				onClick={() => {
					setPostsPageNumber((prev) => --prev);
					navigate(`/feed/${postsPageNumber - 1}`);
				}}
				className={postsPageNumber != 1 ? "" : styles.inactive}
			>
				<span className="material-symbols-outlined">arrow_back</span>
			</button>

			<ul>
				<span
					className={styles.selector}
					style={{ left: `${(postsPageNumber - 1) * 2.5}rem` }}
				></span>
				{Array.from({ length: maxNumberOfPages }, (_, i) => i + 1).map(
					(num) => (
						<li
							className={postsPageNumber == num ? styles.active : ""}
							key={num}
							onClick={() => {
								setPostsPageNumber(num);
								navigate(`/feed/${num}`);
							}}
						>
							{num}
						</li>
					)
				)}
			</ul>

			<button
				onClick={() => {
					setPostsPageNumber((prev) => ++prev);
					navigate(`/feed/${postsPageNumber + 1}`);
				}}
				className={postsPageNumber != maxNumberOfPages ? "" : styles.inactive}
			>
				<span className="material-symbols-outlined">arrow_forward</span>
			</button>
		</motion.div>
	);
}
