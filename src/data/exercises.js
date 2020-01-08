import chemistry1 from '../../public/images/chemistry-1.jpg';
import chemistry2 from '../../public/images/chemistry-2.jpg';
import exam1 from '../../public/images/exam-preview-01.png';
import exam2 from '../../public/images/exam-preview-02.png';
import examChemistry1 from '../../public/images/exam-chemistry-1.jpg';
import examChemistry2 from '../../public/images/exam-chemistry-2.jpg';
import questions from './exerciseQuestions';
import { randomBetweenInt } from '../utilities/random';

const randomViews = () => randomBetweenInt(0, 50000);
const randomAttempts = () => randomBetweenInt(0, 10000);
const getId = (index) => 'E' + index.toString().padStart(5, 0);
let imageGeneration = 0;
const getChemistryImage = () =>
// eslint-disable-next-line no-plusplus
	imageGeneration++ % 2 ? chemistry1 : chemistry2;

const chemistryExercise = () => ({
	id: 'EC00001',
	title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
	image: getChemistryImage(),
	subject: 'Hóa học',
	questionCount: 30,
	difficulty: 'cơ bản',
	description:
		'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
	publish: '31/10/2019',
	views: randomViews(),
	attempts: randomAttempts(),
	questions,
});

const chemistryExercises = [];

for (let i = 0; i < 10; i += 1) {
	chemistryExercises.push({ ...chemistryExercise(), id: getId(i + 1) });
}

export { chemistryExercises };

// eslint-disable-next-line no-plusplus
const getNationalImage = () => (imageGeneration++ % 2 ? exam1 : exam2);
// eslint-disable-next-line no-plusplus
const getChemistryExamImage = () => (imageGeneration++ % 2 ? examChemistry1 : examChemistry2);

const geographyExam = () => ({
	id: 'EN00001',
	title: 'Tổng ôn tập thi THPT QG 2020 môn Địa lý',
	image: getNationalImage(),
	subject: 'Địa lý',
	questionCount: 30,
	difficulty: 'cơ bản',
	description: 'Joe mama',
	publish: '31/10/2019',
	views: randomViews(),
	attempts: randomAttempts(),
	questions,
});
const chemistryExam = () => ({
	id: 'EN00001',
	title: `Đề thi thử THPT QG 2020 môn Hóa học (Đề ${randomBetweenInt(1, 4)})`,
	image: getChemistryExamImage(),
	subject: 'Hóa học',
	questionCount: 30,
	difficulty: 'cơ bản',
	description: 'Nội dung đề thi bao gồm 30 câu hỏi trắc nghiệm theo chuẩn cấu trúc đề thi THPT QG môn Hóa học của Bộ Giáo dục và Đào tạo.',
	publish: '31/10/2019',
	views: randomViews(),
	attempts: randomAttempts(),
	questions,
});

const exams = {};
exams.geography = [];
exams.chemistry = [];

for (let i = 10; i < 20; i += 1) {
	exams.geography.push({ ...geographyExam(), id: getId(i + 1) });
}
for (let i = 20; i < 30; i += 1) {
	exams.chemistry.push({ ...chemistryExam(), id: getId(i + 1) });
}

export default exams;
