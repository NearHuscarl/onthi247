import * as standingData from '../data/standing';

// const standingDefaultState = {};
const standingDefaultState = { standing: [...standingData.standings],
	weeklyStanding: [...standingData.weeklyStandings],
	monthlyStanding: [...standingData.monthlyStandings],
};

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
