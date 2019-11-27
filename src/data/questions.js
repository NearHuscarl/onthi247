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

const questions = [
	{
		id: 'Q000000001',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000002',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000003',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000004',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000005',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000006',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000007',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000008',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000009',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000010',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000011',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000012',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000013',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000014',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000015',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000016',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000017',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000018',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000019',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000020',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000021',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000022',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000023',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000024',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000025',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000026',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000027',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000028',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000029',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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
		id: 'Q000000030',
		question:
			'Chất X có công thức phân tử C3H7O2N và làm mất màu dung dịch brom. Tên gọi của X là',
		answer: 1,
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

export default questions;
