import has from 'lodash/has';

const getExercise = (state, exerciseId) => {
	const ids = Object.keys(state.exercises);

	for (let i = 0; i < ids.length; i += 1) {
		const id = ids[i];
		if (has(state.exercises[id], exerciseId)) {
			return state.exercises[id][exerciseId];
		}
	}
	return null;
};

// eslint-disable-next-line import/prefer-default-export
export { getExercise };
