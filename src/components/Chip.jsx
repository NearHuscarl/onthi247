import React from 'react';
import PropTypes from 'prop-types';
import styled, { theme } from '../styles';

const ChipContainer = styled.div`
	padding: 0.3rem 0.6rem;

	background-color: #e1ecf4;
	color: #39739d;
	border-radius: ${theme.borderRound};
	font-size: 1rem;

	transition: background-color 0.2s;
	cursor: pointer;

	&:hover {
		background-color: darken(#e1ecf4, 7.5%);
	}
`;

export default function Chip({ children }) {
	return <ChipContainer>{children}</ChipContainer>;
}

Chip.propTypes = {
	children: PropTypes.node.isRequired,
};
