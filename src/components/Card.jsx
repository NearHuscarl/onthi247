import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Card({ className, children, background, noPadding }) {
	return (
		<div
			className={classNames({
				card: true,
				'card--no-padding': noPadding,
				'card--white': background === 'white',
				'card--transparent': background === 'transparent',
				[className]: className !== '',
			})}
		>
			{children}
		</div>
	);
}

Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
	className: PropTypes.string,
	background: PropTypes.string,
	noPadding: PropTypes.bool,
};

Card.defaultProps = {
	className: '',
	background: '',
	noPadding: false,
};
