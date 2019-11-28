import users from './users';
import { randomBetweenInt, randomDateFromNow } from '../utilities/random';

const randomDateInMinute = () =>
	randomDateFromNow({
		minuteStart: -59,
		minuteEnd: 0,
	}).toISOString();
const randomDateInDay = () =>
	randomDateFromNow({
		dayStart: -20,
		dayEnd: 0,
	}).toISOString();
const randomVotes = () => randomBetweenInt(0, 200);
const randomViews = () => randomBetweenInt(200, 10000);
const randomAnswers = () => randomBetweenInt(0, 30);
const randomAcceptedAnswer = () => randomBetweenInt(0, 100) >= 50;
const randomUser = () => users[randomBetweenInt(2, 9)];
const getQuestionId = (index) => 'Q' + index.toString().padStart(5, 0);

const question = () => ({
	id: 'Q000',
	title: 'Nhờ giúp đỡ dạng bài tìm giá trị của m để hàm số đạt cực trị',
	subject: 'Toán',
	description:
		'Cho em hỏi câu này với: Tìm giá trị của m để hàm số Y = x^3 – 3mx^2 + (2m+1)x – 2 đạt cực trị tại x = 1.',
	tags: ['Hàm số', 'Cực trị'],
	date: randomDateInMinute(),
	votes: randomVotes(),
	views: randomViews(),
	answers: randomAnswers(),
	acceptedAnswer: randomAcceptedAnswer(),
	user: randomUser(),
});

const questions = {};

for (let i = 0; i < 10; i += 1) {
	const id = getQuestionId(i + 1);
	questions[id] = { ...question(), id };
}

const sidebarQuestion = () => ({
	title: 'Tính số nhóm gen liên kết thường bằng bộ NST',
	subject: 'Toán',
	description: 'Plz halp me senpai ヾ(●⌒∇⌒●)ﾉ <丶´Д｀><丶´Д｀><丶´Д｀>',
	tags: ['Hàm số', 'Cực trị'],
	date: randomDateInDay(),
	votes: randomVotes(),
	views: randomViews(),
	answers: randomAnswers(),
	acceptedAnswer: randomAcceptedAnswer(),
	user: randomUser(),
});

const hotQuestions = [];
const newQuestions = [];

for (let i = 0; i < 10; i += 1) {
	const id = getQuestionId(i + 1);
	hotQuestions[id] = { ...sidebarQuestion(), id };
	newQuestions[id] = { ...sidebarQuestion(), id };
}

export { questions, hotQuestions, newQuestions };
