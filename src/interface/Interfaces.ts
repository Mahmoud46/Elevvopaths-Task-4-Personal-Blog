export interface IContext {
	filterCategory: string;
	searchKey: string;
	blogPosts: IBlogPostCard[];
	setSearchKey: React.Dispatch<React.SetStateAction<string>>;
	setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
	postsPageNumber: number;
	setPostsPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface IBlogPostCard {
	id: string;
	img: string;
	title: string;
	date: string;
	category: string;
	summary: string;
	body: string;
}
