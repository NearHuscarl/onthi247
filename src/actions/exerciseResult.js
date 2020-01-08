import { getExercise } from '../store/storeHelper';

const setExerciseResultQuestion = (selectedQuestion = 0) => ({
	type: 'SET_EXERCISE_RESULT_SELECTED_QUESTION',
	payload: {
		selectedQuestion,
	},
});

const setExerciseResultComment = (comment = {}) => ({
	type: 'SET_EXERCISE_RESULT_COMMENT',
	payload: {
		comment,
	},
});

const setTimeTaken = (timeTaken) => ({
	type: 'SET_EXERCISE_RESULT_TIME_TAKEN',
	payload: {
		timeTaken,
	},
});

const setScore = (score) => ({
	type: 'FETCH_EXERCISE_RESULT_SCORE',
	payload: {
		score,
	},
});

const startSetScore = (exerciseId) => (dispatch, getState) => {
	const { questions } = getState().exerciseQuestions;
	const questionsWithAnswer = getExercise(getState(), exerciseId).questions;
	const score = questionsWithAnswer.reduce((prev, q) => {
		if (questions[q.id].answer === q.answer) {
			return prev + 1;
		}
		return prev;
	}, 0);

	dispatch(setScore(score));
};

export {
	setExerciseResultQuestion,
	setExerciseResultComment,
	setTimeTaken,
	startSetScore,
};
