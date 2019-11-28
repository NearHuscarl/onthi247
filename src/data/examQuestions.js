import { randomBetween } from '../utilities/random';

const answersPerQuestion = 4;
let currentAnswer = 1;
let percentChanceLeft = 1;

function clamp(n, min, max) {
	return Math.min(Math.max(n, min), max);
}

function randomAnswerPercentage() {
	if (currentAnswer % answersPerQuestion === 0) {
		const answerPercentChance = percentChanceLeft;
		percentChanceLeft = 1;
		currentAnswer = 1;
		return clamp(answerPercentChance, 0, 1);
	}

	const answerPercentChance = randomBetween(0, percentChanceLeft * 100) / 100;
	percentChanceLeft -= answerPercentChance;
	currentAnswer += 1;

	return clamp(answerPercentChance, 0, 1);
}

const question = () => ({
	question:
		'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
	answer: 0,
	answers: [
		{
			text: 'axit β-aminopropionic',
			percentage: randomAnswerPercentage(),
		},
		{
			text: 'mety aminoaxetat',
			percentage: randomAnswerPercentage(),
		},
		{
			text: 'axit α-aminopropionic',
			percentage: randomAnswerPercentage(),
		},
		{
			text: 'amoni acrylat',
			percentage: randomAnswerPercentage(),
		},
	],
	answerDetail: `X làm mất màu Br2 → X chứa nối đôi C=C
→ X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
→ Đáp án D`,
});

const questions = [];

for (let i = 0; i < 30; i += 1) {
	questions.push({
		...question(),
		id: 'EQ' + (i + 1).toString().padStart(5, 0),
	});
}

export default questions;
