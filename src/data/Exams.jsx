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

const exam = [
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
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
		answerDetail: `X làm mất màu Br2 &#8594; X chứa nối đôi C=C
&#8594; X là CH2=CHCOONH4 (Amoni acrylat)
CH2=CHCOONH4 + Br2 là CH2BrCHBrCOONH4
&#8594; Đáp án D`,
	},
];

export default exam;
