const setStanding = (id, standing = []) => ({
	type: 'SET_STANDING',
	payload: {
		id,
		standing,
	},
});

// eslint-disable-next-line import/prefer-default-export
export { setStanding };
