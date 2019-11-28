import React from 'react';
import PropTypes from 'prop-types';

export default function Chip({ children }) {
	return <div className='chip'>{children}</div>;
}

Chip.propTypes = {
	children: PropTypes.node.isRequired,
};
