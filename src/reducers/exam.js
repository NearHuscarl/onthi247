import examData from '../data/exams';

// const examDefaultState = {};
const examDefaultState = {
	testExam1: { ...examData[0] },
	testExam2: { ...examData[1] },
	testExam3: { ...examData[2] },
	testExam4: { ...examData[3] },
	testExam5: { ...examData[4] },
	testExam6: { ...examData[5] },
	testExam7: { ...examData[6] },
	testExam8: { ...examData[7] },
	testExam9: { ...examData[8] },
	testExam10: { ...examData[9] },
};

const examReducer = (state = examDefaultState, action) => {
	switch (action.type) {
		case 'SET_EXAM': {
			const { id, exams } = action.payload;
			return { ...state, [id]: exams };
		}
		default:
			return state;
	}
};

export default examReducer;
