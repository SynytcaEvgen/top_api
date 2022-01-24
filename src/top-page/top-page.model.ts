enum TopLevelCategory {
	Courses,
	Services,
	Books,
	ProdItem,
}

class TopPageModel {
	firstCategory: TopLevelCategory;
	secondCategory: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		juniorDakary: number;
		moddleSalary: number;
		seniorSalary: number;
	};
	advantages: {
		title: string;
		description: string;
	}[];
	seoText: string;
	tagsTitle: string;
	tags: string[];
}

export default TopPageModel;
