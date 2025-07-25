import type { ReactNode } from "react";
import styles from "./LatestArticleCard.module.scss";
import data from "../../data/articles.json";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LatestArticleCard(): ReactNode {
	const navigate = useNavigate();
	return (
		<div
			className={styles["latest-card"]}
			style={{
				background: `url(${data.articles[0].img}) no-repeat`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<div className={styles["latest-card-title"]}>
				<motion.p
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20,
						duration: 0.4,
					}}
					viewport={{ once: false, amount: 0.2 }}
					className={styles["category-date"]}
				>
					{data.articles[0].date}
				</motion.p>

				<motion.h1
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20,
						duration: 0.4,
					}}
					viewport={{ once: false, amount: 0.2 }}
					onClick={() => navigate(`/feed/post/${data.articles[0].id}`)}
				>
					{data.articles[0].title}
				</motion.h1>

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
					className={styles.cats}
				>
					{data.articles[0].category.split("/").map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</motion.div>
				<motion.p
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20,
						duration: 0.4,
					}}
					viewport={{ once: false, amount: 0.2 }}
				>
					{data.articles[0].summary}
				</motion.p>
			</div>
		</div>
	);
}
