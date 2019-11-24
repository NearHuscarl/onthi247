import chemistry1 from '../../public/images/chemistry-1.jpg';
import chemistry2 from '../../public/images/chemistry-2.jpg';

const answersPerQuestion = 4;
let currentAnswer = 1;
let percentChanceLeft = 1;

function randomBetween(min, max) {
	return Math.random() * (max - min + 1) + min;
}
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

const questions = [
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
	{
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
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
	},
];

const exams = [
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry1,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry2,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry1,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry2,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry1,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry2,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry1,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry2,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry1,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
	{
		title: 'Bài tập Amin - Amino Axit - Peptit - Protein',
		image: chemistry2,
		subject: 'Hóa học',
		questionCount: 30,
		difficulty: 'cơ bản',
		description:
			'Nội dung bài tập bao gồm 30 câu hỏi trắc nghiệm chuyên đề Amin - Amino Axit- Peptit - Protein kèm theo đáp án và lời giải chi tiết ở cuối bài tập.',
		publish: '31/10/2019',
		views: 1200,
		attempts: 600,
		questions,
	},
];

export default exams;
