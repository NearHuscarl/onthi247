const setExam = (id, exam = {}) => ({
	type: 'SET_EXAM',
	payload: {
		id,
		exam,
	},
});

// eslint-disable-next-line import/prefer-default-export
export { setExam };
