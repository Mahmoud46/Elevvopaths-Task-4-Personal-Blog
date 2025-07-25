import type { IBlogPostCard } from "../interface/Interfaces";

export const toggleTheme = () => {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	const nextTheme = currentTheme === "dark" ? "light" : "dark";
	localStorage.setItem("data-theme", nextTheme);
	applyTheme(nextTheme);
};

export const applyTheme = (theme: "light" | "dark") => {
	document.documentElement.setAttribute("data-theme", theme);
};

export const getElementsForPage = (
	pageNum: number,
	data: IBlogPostCard[]
): IBlogPostCard[] => {
	const start = (pageNum - 1) * 9;
	const end = start + 9;
	return data.slice(start, end);
};
