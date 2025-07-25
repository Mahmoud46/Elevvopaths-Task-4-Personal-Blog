import { useEffect, useState, type ReactNode } from "react";
import { Context } from "./Contex";
import type { IBlogPostCard, IContext } from "../interface/Interfaces";
import articles from "../data/articles.json";

export default function ContextProvider({ children }: { children: ReactNode }) {
	const [searchKey, setSearchKey] = useState<string>("");
	const [filterCategory, setFilterCategory] = useState<string>("all");
	const [blogPosts, setBlogPosts] = useState<IBlogPostCard[]>([]);
	const [postsPageNumber, setPostsPageNumber] = useState<number>(0);

	useEffect(() => {
		setBlogPosts(articles.articles);
	}, []);

	const value: IContext = {
		searchKey,
		filterCategory,
		blogPosts,
		setSearchKey,
		setFilterCategory,
		postsPageNumber,
		setPostsPageNumber,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}
