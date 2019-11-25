function randomBetween(min, max) {
	return Math.random() * (max - min + 1) + min;
}

// eslint-disable-next-line import/prefer-default-export
export { randomBetween };
