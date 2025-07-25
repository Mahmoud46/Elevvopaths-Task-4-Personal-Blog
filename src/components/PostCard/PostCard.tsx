import type { ReactNode } from "react";
import styles from "./PostCard.module.scss";
import type { IBlogPostCard } from "../../interface/Interfaces";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PostCard({ post }: { post: IBlogPostCard }): ReactNode {
	const navigate = useNavigate();
	return (
		<motion.div
			className={styles.card}
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
			<img src={post.img} alt={post.title} loading="lazy" />
			<div
				className={styles.title}
				onClick={() => {
					navigate(`/feed/post/${post.id}`);
					window.scrollTo(1, 1);
				}}
			>
				<p>{post.date}</p>
				<p>{post.title}</p>
				<div className={styles.cat}>
					{post.category.split("/").map((cat, i) => (
						<span key={i}>{cat}</span>
					))}
				</div>
				<p>{post.summary}</p>
			</div>
		</motion.div>
	);
}
