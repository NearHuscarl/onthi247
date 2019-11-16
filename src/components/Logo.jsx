import React from 'react';
import PropTypes from 'prop-types';

export default function Logo({ small, className }) {
	return small ? (
		<h2 className={'h2 ' + className} >
			OnThi<span className='h2 h2--orange'>247</span>
		</h2>
	) : (
		<h1 className={'h1 ' + className} >
			OnThi<span className='h1 h1--orange'>247</span>
		</h1>
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
