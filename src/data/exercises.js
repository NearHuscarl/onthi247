import chemistry1 from '../../public/images/chemistry-1.jpg';
import chemistry2 from '../../public/images/chemistry-2.jpg';
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
