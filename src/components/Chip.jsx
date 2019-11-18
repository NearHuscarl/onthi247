import React from 'react';
import PropTypes from 'prop-types';

export default function Chip({ name, onClick }) {
	return (
		<div className='btn-chip'>
			<div className='btn-chip__label'>{name}</div>
			<button className='btn-chip__btn' type='button' onClick={onClick}>
				<i className='fas fa-times' aria-hidden='true' />
			</button>
		</div>
	);
}

Chip.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
