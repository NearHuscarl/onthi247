import { exams, chemistryExams } from '../data/exams';
import arrayToObject from '../utilities/arrayToObject';

// const examDefaultState = {};
const examsDefaultState = {
	national: arrayToObject(exams, 'id'),
	chemistry: arrayToObject(chemistryExams, 'id'),
};

const examsReducer = (state = examsDefaultState, action) => {
	switch (action.type) {
		case 'SET_EXAM': {
			const { id, exam } = action.payload;
			return { ...state, [id]: exam };
		}
		default:
			return state;
	}
};

export default examsReducer;
