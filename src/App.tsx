import { useEffect, useState, type ReactNode } from "react";
import Header from "./components/Header/Header";
import { applyTheme } from "./libs/utils";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Posts from "./Pages/BlogPosts/Posts";
import NotFound from "./Pages/NotFound/NotFound";
import BlogArticle from "./Pages/BlogArticle/BlogArticle";

export default function App(): ReactNode {
	const [dataTheme, setDataTheme] = useState<"dark" | "light">(
		localStorage.getItem("data-theme") as "dark" | "light" | "dark"
	);

	useEffect(() => {
		applyTheme(dataTheme);
	}, [dataTheme]);

	return (
		<>
			<Header dataTheme={dataTheme} setDataTheme={setDataTheme} />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/feed/:page" element={<Posts />} />
				<Route path="/feed/post/:id" element={<BlogArticle />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			<p>&copy; 2025 Mahmoud Zakaria. All rights reserved.</p>
		</>
	);
}
