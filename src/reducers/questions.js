import { hotQuestions, newQuestions, questions } from '../data/questions';

// const examDefaultState = {};
const questionsDefaultState = {
	hotQuestions: { ...hotQuestions },
	newQuestions: { ...newQuestions },
	questions: { ...questions },
};

const questionsReducer = (state = questionsDefaultState, action) => {
	switch (action.type) {
		case 'SET_QUESTION': {
			const { id, question } = action.payload;
			return { ...state, questions: { ...state.questions, [id]: question } };
		}
		default:
			return state;
	}
};

export default questionsReducer;
