const setExamResultQuestion = (selectedQuestion = 0) => ({
	type: 'SET_EXAM_RESULT_SELECTED_QUESTION',
	payload: {
		selectedQuestion,
	},
});

const setExamResultComment = (comment = {}) => ({
	type: 'SET_EXAM_RESULT_COMMENT',
	payload: {
		comment,
	},
});

const setTimeTaken = (timeTaken) => ({
	type: 'SET_EXAM_RESULT_TIME_TAKEN',
	payload: {
		timeTaken,
	},
});

const setScore = (score) => ({
	type: 'FETCH_EXAM_RESULT_SCORE',
	payload: {
		score,
	},
});

const startSetScore = (examId) => (dispatch, getState) => {
	const { questions } = getState().examQuestions;
	const questionsWithAnswer = getState().exams.chemistry[examId].questions;
	const score = questionsWithAnswer.reduce((prev, q) => {
		if (questions[q.id].answer === q.answer) {
			return prev + 1;
		}
		return prev;
	}, 0);

	dispatch(setScore(score));
};

export {
	setExamResultQuestion,
	setExamResultComment,
	setTimeTaken,
	startSetScore,
};
