import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { H1, H2 } from './Headings';

export default function Logo({ small, className }) {
	return (
		<Link to='/' className={className}>
			{small ? (
				<H2>
					OnThi
					<H2 as='span' primary>
						247
					</H2>
				</H2>
			) : (
				<H1>
					OnThi
					<H1 as='span' primary>
						247
					</H1>
				</H1>
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
