import { type ReactNode } from "react";
import styles from "./Feed.module.scss";
import type { IBlogPostCard } from "../../interface/Interfaces";
import PostCard from "../PostCard/PostCard";

export default function Feed({
	posts,
	isMax = true,
}: {
	posts: IBlogPostCard[];
	isMax?: boolean;
}): ReactNode {
	return (
		<div className={`${styles.feed} ${isMax ? styles.max : ""}`}>
			<div className={styles["articles-container"]}>
				{posts.map((post, i) => (
					<PostCard post={post} key={i} />
				))}

				{posts.length <= 2 && (
					<>
						<div></div>
						<div></div>
					</>
				)}
			</div>
		</div>
	);
}
