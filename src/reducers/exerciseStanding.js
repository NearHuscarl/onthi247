import standingData from '../data/exerciseStanding';

// const standingDefaultState = {};
const standingDefaultState = { [standingData.exerciseId]: [...standingData.standing] };

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
