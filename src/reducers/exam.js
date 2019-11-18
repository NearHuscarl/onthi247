import exam from '../data/exams';

// const examDefaultState = {};
const examDefaultState = { testExam: [...exam] };

const examReducer = (state = examDefaultState, action) => {
	switch (action.type) {
		case 'SET_EXAM_QUESTIONS': {
			const { id, questions } = action.payload;
			return { ...state, [id]: questions };
		}
		default:
			return state;
	}
};

export default examReducer;
