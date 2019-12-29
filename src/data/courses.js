import PreviewBiology from '../../public/images/course-biology.png';
import PreviewPhysics from '../../public/images/course-physics.png';
import PreviewMath from '../../public/images/course-math.png';
import PreviewEnglish from '../../public/images/course-english.png';
import PreviewChemistry from '../../public/images/course-chemistry.png';

const _courses = [
	{
		id: 1,
		title: 'Super Plus: Chinh phục bài tập nâng cao - Môn Sinh học',
		image: PreviewBiology,
		subject: 'Sinh học',
		teacher: 'Thầy Thịnh Nam',
		description:
			'Khóa học giúp hệ thống lại các điểm kiến thức cũng như các phương pháp giải các dạng bài tập nâng cao trong chương trình sinh học THPT.',
		rating: 3,
		ratingCount: 620,
		price: 1200000,
		originalPrice: 1500000,
		publishDate: '31/10/2019',
		students: 1200,
		tags: [
			'Giải bài tập nâng cao',
			'Chinh phục bài tập sinh học',
			'Bài tập sinh học nâng cao',
		],
	},
	{
		id: 2,
		title: 'Super Plus: Luyện thi THPT QG nâng cao 2020 môn Vật lý',
		image: PreviewPhysics,
		subject: 'Vật lý',
		teacher: 'Thầy Thái Ngọ',
		description:
			'Khóa học giúp hệ thống lại các điểm kiến thức cũng như các phương pháp giải các dạng bài tập nâng cao trong đề thi THPT QG 2020 môn Vật Lý.',
		rating: 3,
		ratingCount: 620,
		price: 1450000,
		originalPrice: 1650000,
		publishDate: '31/10/2019',
		students: 1020,
		tags: [
			'Luyện thi THPT QG',
			'Luyện thi THPT QG môn Vật Lý',
			'Bài tập Vật Lý nâng cao',
		],
	},
	{
		id: 3,
		title: 'Super Plus: Luyện thi THPT QG nâng cao 2020 môn Toán học',
		image: PreviewMath,
		subject: 'Toán học',
		teacher: 'Thầy Nguyễn Tiến Đạt',
		description:
			'Khóa học giúp hệ thống lại các điểm kiến thức cũng như các phương pháp giải các dạng bài tập nâng cao trong đề thi THPT QG 2020 môn Toán học.',
		rating: 3,
		ratingCount: 720,
		price: 1250000,
		originalPrice: 1450000,
		publishDate: '31/10/2019',
		students: 1605,
		tags: [
			'Luyện thi THPT QG',
			'Luyện thi THPT QG môn Toán học',
			'Bài tập Toán học nâng cao',
		],
	},
	{
		id: 4,
		title: 'Super Plus: Luyện thi THPT QG nâng cao 2020 môn Tiếng anh',
		image: PreviewEnglish,
		subject: 'Tiếng anh',
		teacher: 'Cô Nguyễn Phương',
		description:
			'Khóa học giúp hệ thống lại các điểm kiến thức cũng như các phương pháp giải các dạng bài tập nâng cao trong đề thi THPT QG 2020 môn Tiếng anh.',
		rating: 3,
		ratingCount: 720,
		price: 1250000,
		originalPrice: 1450000,
		publishDate: '31/10/2019',
		students: 1605,
		tags: [
			'Luyện thi THPT QG',
			'Luyện thi THPT QG môn Tiếng anh',
			'Bài tập Tiếng anh nâng cao',
		],
	},
	{
		id: 5,
		title: 'Super Plus: Luyện thi THPT QG nâng cao 2020 môn Hóa học',
		image: PreviewChemistry,
		subject: 'Hóa học',
		teacher: 'Thầy Lê Phạm Thành',
		description:
			'Khóa học giúp hệ thống lại các điểm kiến thức cũng như các phương pháp giải các dạng bài tập nâng cao trong đề thi THPT QG 2020 môn Hóa học.',
		rating: 3,
		ratingCount: 720,
		price: 1250000,
		originalPrice: 1450000,
		publishDate: '31/10/2019',
		students: 1605,
		tags: [
			'Luyện thi THPT QG',
			'Luyện thi THPT QG môn Hóa học',
			'Bài tập Hóa học nâng cao',
		],
	},
];

const courses = [..._courses, ..._courses];

export default courses;
