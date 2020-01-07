const exerciseQuestionsDefaultState = {
	questions: {},
};

const exerciseQuestionsReducer = (state = exerciseQuestionsDefaultState, action) => {
	switch (action.type) {
		case 'SET_EXERCISE_QUESTIONS': {
			const { questions } = action.payload;
			return {
				questions: questions.reduce((prev, q) => {
					const questionObj = prev;
					questionObj[q.id] = {
						flag: false,
						answer: -1,
					};
					return questionObj;
				}, {}),
			};
		}
		case 'SET_EXERCISE_QUESTION_FLAG': {
			const { id, flag } = action.payload;
			return {
				questions: {
					...state.questions,
					[id]: {
						flag,
						answer: state.questions[id].answer,
					},
				},
			};
		}
		case 'SET_EXERCISE_QUESTION_ANSWER': {
			const { id, answer } = action.payload;
			return {
				questions: {
					...state.questions,
					[id]: {
						answer,
						flag: state.questions[id].flag,
					},
				},
			};
		}
		default:
			return state;
	}
};

export default exerciseQuestionsReducer;
