const setExamQuestions = (questions) => ({
	type: 'SET_EXAM_QUESTIONS',
	payload: {
		questions,
	},
});

const setExamQuestionFlag = (id, flag) => ({
	type: 'SET_EXAM_QUESTION_FLAG',
	payload: {
		id,
		flag,
	},
});

const setExamQuestionAnswer = (id, answer) => ({
	type: 'SET_EXAM_QUESTION_ANSWER',
	payload: {
		id,
		answer,
	},
});

export { setExamQuestions, setExamQuestionFlag, setExamQuestionAnswer };
