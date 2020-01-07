const setExerciseStanding = (id, standing = []) => ({
	type: 'SET_EXERCISE_STANDING',
	payload: {
		id,
		standing,
	},
});

// eslint-disable-next-line import/prefer-default-export
export { setExerciseStanding };
