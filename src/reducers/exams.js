import { exams, chemistryExams } from '../data/exams';

// https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
const arrayToObject = (array, keyField) =>
	array.reduce((obj, item) => {
		const o = obj;
		o[item[keyField]] = item;
		return obj;
	}, {});

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
