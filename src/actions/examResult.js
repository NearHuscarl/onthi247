const setExamResultQuestion = (question = 0) => ({
	type: 'SET_EXAM_RESULT_QUESTION',
	payload: {
		question,
	},
});

const setExamResultComment = (comment = {}) => ({
	type: 'SET_EXAM_RESULT_COMMENT',
	payload: {
		comment,
	},
});

export { setExamResultQuestion, setExamResultComment };
