const examResultDefaultState = {
	question: 0,
	comments: [],
};

const examResultReducer = (state = examResultDefaultState, action) => {
	switch (action.type) {
		case 'SET_EXAM_RESULT_QUESTION': {
			const { question  } = action.payload;
			return { ...state, question };
		}
		case 'SET_EXAM_RESULT_COMMENT': {
			const { comment } = action.payload;
			return { ...state, comments: [...state.comments, comment] };
		}
		default:
			return state;
	}
};

export default examResultReducer;
