import { useContext, type ReactNode } from "react";
import styles from "./PostsPageHeader.module.scss";
import { Context } from "../../context/Contex";
import type { IContext } from "../../interface/Interfaces";
import { motion } from "framer-motion";

export default function PostsPageHeader(): ReactNode {
	const { searchKey, setSearchKey, filterCategory, setFilterCategory } =
		useContext(Context) as IContext;

	return (
		<motion.div
			className={styles["posts-page-header"]}
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
			<h1>Articles</h1>
			<div className={styles["search-filter"]}>
				<div className={styles.search}>
					<input
						type="text"
						id="search-article"
						placeholder="Search blog..."
						value={searchKey}
						onChange={(e) => setSearchKey(e.target.value)}
					/>
					<label htmlFor="search-article">
						<span className="material-symbols-outlined">search</span>
					</label>
				</div>
				<div className={styles.filter}>
					<label htmlFor="filter-category">
						<span className="material-symbols-outlined">filter_list</span>
					</label>
					<select
						name=""
						id="filter-category"
						value={filterCategory}
						onChange={(e) => setFilterCategory(e.target.value)}
					>
						<option value="all">All</option>
						<option value="ai">Artificial Inteligence</option>
						<option value="bme">Biomedical Enignearing</option>
						<option value="swe">Software Engineering</option>
					</select>
				</div>
			</div>
		</motion.div>
	);
}
