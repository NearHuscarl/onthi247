const setExamStanding = (id, standing = []) => ({
	type: 'SET_EXAM_STANDING',
	payload: {
		id,
		standing,
	},
});

// eslint-disable-next-line import/prefer-default-export
export { setExamStanding };
