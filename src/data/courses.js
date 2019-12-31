import range from 'lodash/range';
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

export const courseDetail = {
	..._courses[0],
	lastUpdate: '10/12/2019',
	summary: [
		{
			title: 'Phần 1: Tổng quan về khóa học',
			length: '10:00',
			videos: [
				{
					title: '1. Giới thiệu về khóa học',
					length: '06:00',
				},
				{
					title: '2. Hướng dẫn tài tài liệu của khóa học',
					length: '02:00',
				},
				{
					title: '3. Hướng dẫn đăng câu hỏi thắc mắc',
					length: '02:00',
				},
			],
		},
		{
			title: 'Phần 2: Phương pháp giải bài tập Sinh học nâng cao 12',
			length: '08:00:00',
			videos: range(0, 100).map((i) => ({
				title: 'Giải bài tập sinh học ' + i,
				length: '06:00',
			})),
		},
		{
			title: 'Phần 3: Phương pháp giải bài tập nâng cao trong đề thi',
			length: '08:00:00',
			videos: range(0, 50).map((i) => ({
				title: 'Giải bài tập sinh học ' + i,
				length: '06:00',
			})),
		},
		{
			title: 'Phần 4: Phương pháp giải nhanh với máy tính casio',
			length: '04:00:00',
			videos: range(0, 50).map((i) => ({
				title: 'Giải bài tập sinh học ' + i,
				length: '06:00',
			})),
		},
		{
			title: 'Phần 5: Luyện giải đề thi mẫu',
			length: '03:50:00',
			videos: range(0, 47).map((i) => ({
				title: 'Giải bài tập sinh học ' + i,
				length: '06:00',
			})),
		},
	],
	features: [
		'Phương pháp giải các dạng bài tập nâng cao trong chương trình Sinh học lớp 12',
		'Phương pháp giải các dạng bài tập nâng cao trong đề thi THPT QG môn Sinh học',
		'Cách sử dụng máy tính casio để giải nhanh các dạng bài tập trắc nghiệm sinh học nâng cao',
		'Luyện giải các đề thi mẫu nâng cao do thầy Thịnh Nam biên soạn',
	],
	requirements: [
		'Sử dụng máy tính, điện thoại có kết nối với internet.',
		'Nắm chắc kiến thức Sinh học 12 cơ bản.',
	],
	courseDescription: `Thầy tin rằng, khóa học sẽ giúp các em xử lý bài tập nhanh hơn và đặc biệt là kĩ năng xử lý đối với các dạng bài tập vận dụng và vận dụng cao.

	Khóa học này cùng khóa [SUPER-PLUS: CHINH PHỤC BÀI TẬP SINH HỌC] là giải pháp toàn diện cho các em học sinh mục tiêu điểm môn Sinh từ 8 đến 10.

	Đề thi gồm toàn câu hỏi vận dụng và vận dụng cao, câu hỏi đếm mệnh đề. Qua đó các em được luyện tập thật nhuần nhuyễn kiến thức. 

	Khoá [SUPER-PLUS: CHINH PHỤC BÀI TẬP SINH HỌC] đảm bảo bao phủ tất cả các dạng câu hỏi vận dụng và vận dụng cao. Từ đó giúp các em tự tin đi thi chinh phục ngưỡng điểm cao và tuyệt đối trong kì  thi THPT Quốc gia năm 2020.`,
};

export default courses;
