import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children, className }) {
	return <div className={'card ' + className}>{children}</div>;
}

Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]).isRequired,
	className: PropTypes.string,
};

Card.defaultProps = {
	className: '',
};
