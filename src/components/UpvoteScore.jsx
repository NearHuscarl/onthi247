import React from 'react';
import PropTypes from 'prop-types';
import { ButtonText } from './Buttons';
import styled, { appColors } from '../styles';
import Checkmark from '../../public/images/checkmark.png';

const IconBase = styled.i`
	display: block;
	width: 3rem;
	height: 1.25rem;
	background-color: ${appColors.greyLight3};
`;

const UpvoteIcon = styled(IconBase)`
	clip-path: polygon(0 100%, 50% 0, 100% 100%, 100% 100%);
`;

const DownvoteIcon = styled(IconBase)`
	clip-path: polygon(0 0, 100% 0, 50% 100%, 50% 100%);
	margin-bottom: 1rem;
`;

const Score = styled.div`
	padding: 0.4rem 0;
	font-size: 1.75rem;
`;

const UpvoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 3rem;
`;

export default function UpvoteScore({ score, accepted }) {
	return (
		<UpvoteContainer>
			<ButtonText type='button'>
				<UpvoteIcon />
			</ButtonText>
			<Score>{score}</Score>
			<ButtonText type='button'>
				<DownvoteIcon />
			</ButtonText>
			{accepted && <img src={Checkmark} alt='checkmark' />}
		</UpvoteContainer>
	);
}

UpvoteScore.propTypes = {
	score: PropTypes.number.isRequired,
	accepted: PropTypes.bool,
};

UpvoteScore.defaultProps = {
	accepted: false,
};
