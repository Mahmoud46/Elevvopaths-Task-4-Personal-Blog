import { useContext, useEffect, useState, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogArticle.module.scss";
import type { IBlogPostCard, IContext } from "../../interface/Interfaces";
import { Context } from "../../context/Contex";
import NotFound from "../NotFound/NotFound";
import PostCard from "../../components/PostCard/PostCard";
import { motion } from "framer-motion";

export default function BlogArticle(): ReactNode {
	const [article, setArticle] = useState<IBlogPostCard | null>(null);
	const { blogPosts } = useContext(Context) as IContext;
	const { id } = useParams();

	useEffect(() => {
		const articleIndex = blogPosts.findIndex((post) => post.id == id);
		if (articleIndex != -1) setArticle(blogPosts[articleIndex]);
	}, [id, blogPosts]);
	return (
		<section className={styles.article}>
			{article && (
				<>
					<article>
						<div className={styles["article-header"]}>
							<img src={article.img} alt={article.title} />
							<div className={styles.title}>
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
									{article.date}
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
								>
									{article.title}
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
									{article.category.split("/").map((cat, i) => (
										<span key={i}>{cat}</span>
									))}
								</motion.div>
							</div>
						</div>

						<div className={styles.body}>
							{article.body.split("..").map((sentence, i) => (
								<motion.p
									key={i}
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
									{sentence}
									{sentence != "" ? "." : ""}
								</motion.p>
							))}
						</div>
					</article>

					<div className={styles["related-posts"]}>
						<h2>Related Posts</h2>

						<div className={styles["posts-container"]}>
							<div className={styles["posts-holder"]}>
								{blogPosts
									.filter(
										(post) =>
											post.category
												.split("/")
												.some((cat) => article.category.includes(cat)) &&
											post.title != article.title
									)
									.slice(0, 4)
									.map((post, i) => (
										<div className={styles["post-holder"]} key={i}>
											<PostCard post={post} />
										</div>
									))}
							</div>
						</div>
					</div>
				</>
			)}
			{!article && <NotFound />}
		</section>
	);
}
