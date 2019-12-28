import Tinycolor from 'tinycolor2';

function lighten(color) {
	return Tinycolor(color)
		.lighten()
		.toString();
}

function darken(color) {
	return Tinycolor(color)
		.darken()
		.toString();
}

function transparentize(color, value) {
	const tnColor = Tinycolor(color);
	tnColor.setAlpha(1 - value);
	return tnColor.toString();
}

export { lighten, darken, transparentize };
