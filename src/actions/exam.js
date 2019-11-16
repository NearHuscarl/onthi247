const setExamQuestions = (id, questions = []) => ({
	type: 'SET_EXAM_QUESTIONS',
	payload: {
		id,
		questions,
	},
});

// eslint-disable-next-line import/prefer-default-export
export { setExamQuestions };
