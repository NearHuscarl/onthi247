import range from 'lodash/range';
import preview1 from '../../public/images/exercise-preview-1.jpg';
import preview2 from '../../public/images/exercise-preview-2.jpg';

const getImage = (i) => (i % 2 === 0 ? preview1 : preview2);

const exercises = range(0, 8).map((i) => ({
	id: i,
	title: '11 đề tham khảo môn Văn chốt thi THPT Quốc gia',
	image: getImage(i),
	subject: 'Ngữ Văn',
	description:
		'11 đề tham khảo môn Văn chốt thi THPT Quốc gia 2019 giúp thí sinh hệ thống lại kiến thức, luyện giải đề thi môn Ngữ Văn để chuẩn bị thật tốt cho kỳ thi THPT Quốc gia 2019 sắp tới.',
	publishDate: '31/10/2019',
	views: 45020,
	downloads: 40691,
	tags: [
		'Đề tham khảo môn Văn',
		'Đề thi thử môn Văn',
		'Ôn thi THPT QG môn Văn',
	],
}));

export const sidebarExercises = range(0, 5).map((i) => ({
	id: i,
	title: 'Đề thi tham khảo THPT Quốc gia 2019 môn Địa Lý của Bộ GD&ĐT',
	image: getImage(i),
	subject: 'Ngữ Văn',
	description:
		'11 đề tham khảo môn Văn chốt thi THPT Quốc gia 2019 giúp thí sinh hệ thống lại kiến thức, luyện giải đề thi môn Ngữ Văn để chuẩn bị thật tốt cho kỳ thi THPT Quốc gia 2019 sắp tới.',
	publishDate: '31/10/2019',
	views: 45020,
	downloads: 40691,
	tags: [
		'Đề tham khảo môn Văn',
		'Đề thi thử môn Văn',
		'Ôn thi THPT QG môn Văn',
	],
}));

export default exercises;
