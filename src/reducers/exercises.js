import exams, { chemistryExercises } from '../data/exercises';
import arrayToObject from '../utilities/arrayToObject';

// const examDefaultState = {};
const exercisesDefaultState = {
	examGeography: arrayToObject(exams.geography, 'id'),
	examChemistry: arrayToObject(exams.chemistry, 'id'),
	chemistry: arrayToObject(chemistryExercises, 'id'),
};

const exercisesReducer = (state = exercisesDefaultState, action) => {
	switch (action.type) {
		case 'SET_EXERCISE': {
			const { id, exam } = action.payload;
			return { ...state, [id]: exam };
		}
		default:
			return state;
	}
};

export default exercisesReducer;
