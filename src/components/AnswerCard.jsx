import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { answerProps } from '../utilities/proptypes';
import styled, { appColors, curves, theme } from '../styles';

const AnswerContainer = styled.div`
	position: relative;

	/* the white circle at top left */
	&::before {
		background-color: ${appColors.white};

		width: 1.7rem;
		height: 1.7rem;
		border-radius: 50%;

		position: absolute;
		top: 0.7rem;
		left: 0.7rem;

		content: '';
		z-index: 2;
	}

	/* answer percentage overlay of this answer */
	&::after {
		background-color: ${appColors.primaryDark};

		width: ${(props) => props.width}%;
		height: 100%;
		border-radius: inherit;

		position: absolute;
		top: 0;
		left: 0;

		z-index: 1;
		content: '';
		transition: width 0.25s ${curves.easeOutBack};
	}

	background-color: ${appColors.primaryLight};
	border-radius: ${theme.borderRound};
	padding: 0.3rem 3.5rem;
`;

const AnswerText = styled.div`
	position: relative;

	font-size: 1.7rem;
	color: ${appColors.greyDark3};
	z-index: 2;
`;

const AnswerStats = styled.div`
	position: relative;

	font-size: 1.4rem;
	color: ${appColors.white};
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
	z-index: 2;
`;

export function AnswerDetail({ answer }) {
	const chance = (answer.percentage * 100).toFixed(0);
	return (
		<AnswerContainer width={chance}>
			<AnswerText>{answer.text}</AnswerText>
			<AnswerStats>{`${chance}% người tham gia lựa chọn`}</AnswerStats>
		</AnswerContainer>
	);
}

AnswerDetail.propTypes = {
	answer: answerProps.isRequired,
};

export default function AnswerCard({ question, answers }) {
	return (
		<Card>
			<div className='h3'>{question}</div>
			<div className='mb-sm' />
			{answers.map((a) => (
				<React.Fragment key={a.text}>
					<AnswerDetail answer={a} />
					<div className='mb-sm' />
				</React.Fragment>
			))}
		</Card>
	);
}

AnswerCard.propTypes = {
	question: PropTypes.string.isRequired,
	answers: PropTypes.arrayOf(answerProps).isRequired,
};
