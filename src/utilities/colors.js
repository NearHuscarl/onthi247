import Tinycolor from 'tinycolor2';

/**
 *
 * @param {*} color color to lighten
 * @param {*} amount amount from 0 to 100
 */
function lighten(color, amount = 10) {
	return Tinycolor(color)
		.lighten(amount)
		.toString();
}

/**
 *
 * @param {*} color color to darken
 * @param {*} amount amount from 0 to 100
 */
function darken(color, amount = 10) {
	return Tinycolor(color)
		.darken(amount)
		.toString();
}

/**
 *
 * @param {*} color color to transparentize
 * @param {*} amount amount from 0 to 1
 */
function transparentize(color, value) {
	const tnColor = Tinycolor(color);
	tnColor.setAlpha(1 - value);
	return tnColor.toString();
}

export { lighten, darken, transparentize };
