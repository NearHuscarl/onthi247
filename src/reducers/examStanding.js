import standingData from '../data/examStanding';

// const standingDefaultState = {};
const standingDefaultState = { [standingData.examId]: [...standingData.standing] };

const standingReducer = (state = standingDefaultState, action) => {
	switch (action.type) {
		case 'SET_STANDING': {
			const { id, standing } = action.payload;
			return { ...state, [id]: standing };
		}
		default:
			return state;
	}
};

export default standingReducer;
