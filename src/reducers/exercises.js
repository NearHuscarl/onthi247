import { chemistryExercises } from '../data/exercises';
import { exams } from '../data/exams';
import arrayToObject from '../utilities/arrayToObject';

// const examDefaultState = {};
const exercisesDefaultState = {
	national: arrayToObject(exams, 'id'),
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
