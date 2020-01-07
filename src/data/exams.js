import exam1 from '../../public/images/exam-preview-01.png';
import exam2 from '../../public/images/exam-preview-02.png';
import questions from './exerciseQuestions';
import { randomBetweenInt } from '../utilities/random';

const randomViews = () => randomBetweenInt(0, 50000);
const randomAttempts = () => randomBetweenInt(0, 10000);
const getId = (index) => 'E' + index.toString().padStart(5, 0);
let imageGeneration2 = 0;
// eslint-disable-next-line no-plusplus
const getNationalImage = () => (imageGeneration2++ % 2 ? exam1 : exam2);

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
	exams.push({ ...nationalExam(), id: getId(i + 1) });
}

export { exams };
