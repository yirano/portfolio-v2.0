import BookmarkLP from '../../../images/projectImgs/BookmarkLP.jpg';
import FourCard from '../../../images/projectImgs/FourCard.jpg';
import BaseApparel from '../../../images/projectImgs/BaseApparel.jpg';
import ProjectIntro from '../../../images/projectImgs/ProjectIntro.jpg';
import Apple from '../../../images/projectImgs/Apple.jpg';
import FashionBlog from '../../../images/projectImgs/FashionBlog.jpg';

const projectLibrary = [
	{
		id: 0,
		image: BookmarkLP,
		projectName: 'Bookmark Landing Page',
		projectGit: 'https://github.com/yirano/react-bookmark_lp',
		projectURL: 'https://yirano.github.io/react-bookmark_lp/',
		projectLang: [ 'html', 'css', 'javascript', 'react' ],
		projectDesc: 'This project was developed to challenge myself in my studies of ReactJS.',
		active: false
	},
	{
		id: 1,
		image: FourCard,
		projectName: 'Four Card Feature',
		projectGit: 'https://github.com/yirano/frontend-four_card_feature',
		projectURL: 'https://yirano.github.io/frontend-four_card_feature/src/',
		projectLang: [ 'html', 'css', 'javascript' ],
		projectDesc:
			"This was the first challenge I completed from Frontend Mentor's list. Subtle animations were added to give it a touch of creativity.",
		active: false
	},
	{
		id: 2,
		image: BaseApparel,
		projectName: 'Base Apparel',
		projectGit: 'https://github.com/yirano/frontend-base_apparel',
		projectURL: 'https://yirano.github.io/frontend-base_apparel/src/',
		projectLang: [ 'html', 'css', 'javascript' ],
		projectDesc:
			'I learned the importance of typography developing this project. The freedom to convey a message without following traditional rules granted me the appreciation for UI design.',
		active: false
	},
	{
		id: 3,
		image: ProjectIntro,
		projectName: 'Project Tracking Introduction',
		projectGit: 'https://github.com/yirano/frontend-project_tracking_intro',
		projectURL: 'https://yirano.github.io/frontend-project_tracking_intro/src/',
		projectLang: [ 'html', 'css', 'javascript' ],
		projectDesc:
			'As a developer, UI design is an area that I lack in skills, but through this development I acquired the trick in playful designs to convey a message. ',
		active: false
	},
	{
		id: 4,
		image: Apple,
		projectName: 'Apple Landing Page',
		projectGit: 'https://github.com/yirano/frontend-apple',
		projectURL: 'https://yirano.github.io/frontend-apple/src/',
		projectLang: [ 'html', 'css' ],
		projectDesc:
			'One of the very first projects I developed using an old Apple landing page, I focused on the accuracy of the gradient navbar.',
		active: false
	},
	{
		id: 5,
		image: FashionBlog,
		projectName: 'Fashion Blog',
		projectGit: 'https://github.com/yirano/frontend-fashion_blog',
		projectURL: 'https://yirano.github.io/frontend-fashion_blog/',
		projectLang: [ 'html', 'css', 'javascript' ],
		projectDesc:
			'One of the very first designs I mocked from a theme found on Themeforest, I, once again, learned clever UI and UX design. I enjoyed developing the unique way of keeping the user engaged without cluttering the website.',
		active: false
	}
];

export default projectLibrary;
