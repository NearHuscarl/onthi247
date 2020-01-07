const setExercise = (id, exercise = {}) => ({
	type: 'SET_EXERCISE',
	payload: {
		id,
		exercise,
	},
});

// eslint-disable-next-line import/prefer-default-export
export { setExercise };
