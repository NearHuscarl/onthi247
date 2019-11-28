import exam1 from '../../public/images/exam-preview-01.png';
import exam2 from '../../public/images/exam-preview-02.png';
import chemistry1 from '../../public/images/chemistry-1.jpg';
import chemistry2 from '../../public/images/chemistry-2.jpg';
import questions from './examQuestions';
import { randomBetweenInt } from '../utilities/random';

const randomViews = () => randomBetweenInt(0, 50000);
const randomAttempts = () => randomBetweenInt(0, 10000);
const getExamId = (index) => 'E' + index.toString().padStart(5, 0);
let imageGeneration = 0;
let imageGeneration2 = 0;
// eslint-disable-next-line no-plusplus
const getChemistryImage = () => (imageGeneration++) % 2 ? chemistry1 : chemistry2;
// eslint-disable-next-line no-plusplus
const getNationalImage = () => (imageGeneration2++) % 2 ? exam1 : exam2;

const chemistryExam = () => ({
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

const chemistryExams = [];

for (let i = 0; i < 10; i += 1) {
	const id = getExamId(i + 1);
	chemistryExams.push({...chemistryExam(), id })
}

const nationalExam = () => ({
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

const exams = [];

for (let i = 0; i < 10; i += 1) {
	const id = getExamId(i + 1);
	exams.push({...nationalExam(), id })
}

export { chemistryExams, exams };
