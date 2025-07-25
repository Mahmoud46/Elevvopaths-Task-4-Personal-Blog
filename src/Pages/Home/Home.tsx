import { useContext, type ReactNode } from "react";
import LatestArticleCard from "../../components/LatestArticleCard/LatestArticleCard";
import styles from "./Home.module.scss";
import { Context } from "../../context/Contex";
import type { IContext } from "../../interface/Interfaces";
import Feed from "../../components/Feed/Feed";
import { Link } from "react-router-dom";

export default function Home(): ReactNode {
	const { blogPosts } = useContext(Context) as IContext;
	return (
		<section className={styles.home}>
			<LatestArticleCard />
			<div className={styles.blogs}>
				<div className={styles["blog-title"]}>
					<h1>Blog Corner</h1>
					<p>Check out my latest blog post and see what’s new!</p>
				</div>

				<Feed posts={blogPosts.slice(0, 3)} isMax={false} />

				<Link to={"/feed/1"} className={styles["explore-more"]}>
					<p>Explore More</p>
					<span className="material-symbols-outlined">arrow_outward</span>
				</Link>
			</div>
		</section>
	);
}
