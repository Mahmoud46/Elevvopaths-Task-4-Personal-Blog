import { useContext, useEffect, useState, type ReactNode } from "react";
import styles from "./Posts.module.scss";
import { Context } from "../../context/Contex";
import type { IBlogPostCard, IContext } from "../../interface/Interfaces";
import Feed from "../../components/Feed/Feed";
import { useParams } from "react-router-dom";
import { getElementsForPage } from "../../libs/utils";
import PostsPageHeader from "../../components/PostsPageHeader/PostsPageHeader";
import PageSelector from "../../components/PageSelector/PageSelector";
import { motion } from "framer-motion";
import NotFound from "../NotFound/NotFound";

const categoryMap: Record<string, string[]> = {
	ai: ["ai", "artificial intelligence"],
	bme: ["bme", "biomedical engineering"],
	swe: ["swe", "software engineering"],
};

export default function Posts(): ReactNode {
	const [posts, setPost] = useState<IBlogPostCard[]>([]);
	const { searchKey, blogPosts, filterCategory, setPostsPageNumber } =
		useContext(Context) as IContext;
	const { page } = useParams();

	useEffect(() => {
		if (
			page &&
			!Number.isNaN(+page) &&
			+page > 0 &&
			+page <= Math.ceil(blogPosts.length / 9)
		) {
			setPost(getElementsForPage(+page, blogPosts));
			setPostsPageNumber(+page);

			if (filterCategory != "all" && searchKey.trim() != "")
				setPost(
					blogPosts.filter(
						(post) =>
							post.title.toLowerCase().includes(searchKey.toLowerCase()) &&
							categoryMap[filterCategory].some((word) =>
								post.category.toLowerCase().includes(word)
							)
					)
				);
			else if (filterCategory != "all")
				setPost(
					blogPosts.filter((post) =>
						categoryMap[filterCategory].some((word) =>
							post.category.toLowerCase().includes(word)
						)
					)
				);
			else if (searchKey.trim() != "")
				setPost(
					blogPosts.filter((post) =>
						post.title.toLowerCase().includes(searchKey.toLowerCase())
					)
				);
		} else setPost([]);
	}, [searchKey, page, blogPosts, filterCategory]);

	return (
		<>
			{page &&
				!Number.isNaN(+page) &&
				+page > 0 &&
				+page <= Math.ceil(blogPosts.length / 9) && (
					<section className={styles.posts}>
						<PostsPageHeader />
						{page && !Number.isNaN(+page) && posts.length != 0 && (
							<Feed posts={posts} />
						)}
						{posts.length == 0 && (
							<motion.div
								className={styles["posts-not-found"]}
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
								<span className="material-symbols-outlined">
									speaker_notes_off
								</span>
								<h2>
									Sorry, we couldn’t find a post titled <i>{searchKey}</i>.
								</h2>
							</motion.div>
						)}

						{blogPosts.length != 0 &&
							page &&
							!Number.isNaN(+page) &&
							+page > 0 &&
							+page <= Math.ceil(blogPosts.length / 9) &&
							filterCategory == "all" &&
							searchKey.trim() == "" && (
								<PageSelector
									maxNumberOfPages={Math.ceil(blogPosts.length / 9)}
								/>
							)}
					</section>
				)}

			{!(
				page &&
				!Number.isNaN(+page) &&
				+page > 0 &&
				+page <= Math.ceil(blogPosts.length / 9)
			) && <NotFound />}
		</>
	);
}
