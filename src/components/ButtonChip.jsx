import React from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ButtonChip({ name, onClick }) {
	return (
		<div className='btn-chip'>
			<div className='btn-chip__label'>{name}</div>
			<button className='btn-chip__btn' type='button' onClick={onClick}>
				<FontAwesomeIcon icon={faTimes} />
			</button>
		</div>
	);
}

ButtonChip.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
