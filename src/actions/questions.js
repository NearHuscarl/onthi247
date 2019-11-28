const setQuestion = (id, question = {}) => ({
	type: 'SET_QUESTION',
	payload: {
		id,
		question,
	},
});

// eslint-disable-next-line import/prefer-default-export
export { setQuestion };
