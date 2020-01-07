const setExerciseQuestions = (questions) => ({
	type: 'SET_EXERCISE_QUESTIONS',
	payload: {
		questions,
	},
});

const setExerciseQuestionFlag = (id, flag) => ({
	type: 'SET_EXERCISE_QUESTION_FLAG',
	payload: {
		id,
		flag,
	},
});

const setExerciseQuestionAnswer = (id, answer) => ({
	type: 'SET_EXERCISE_QUESTION_ANSWER',
	payload: {
		id,
		answer,
	},
});

export { setExerciseQuestions, setExerciseQuestionFlag, setExerciseQuestionAnswer };
