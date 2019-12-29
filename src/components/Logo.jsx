import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoImage from '../../public/images/logo.png';
import { H1, H2 } from './Headings';
import styled from '../styles';

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;

	img {
		width: ${(props) => props.small ? '2rem' : '3.4rem'};
		margin-right: .9rem;
		margin-top: -.5rem;
	}
`;

export default function Logo({ small, className }) {
	return (
		<StyledLink to='/' className={className} small={small}>
			<img src={LogoImage} alt='logo' />
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
		</StyledLink>
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
