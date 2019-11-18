import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Logo({ small, className }) {
	return (
		<Link to='/' className={className}>
			{small ? (
				<h2 className='h2'>
					OnThi<span className='h2 h2--orange'>247</span>
				</h2>
			) : (
				<h1 className='h1'>
					OnThi<span className='h1 h1--orange'>247</span>
				</h1>
			)}
		</Link>
	);
}

Logo.propTypes = {
	small: PropTypes.bool,
	className: PropTypes.string,
};

Logo.defaultProps = {
	small: false,
	className: '',
};
