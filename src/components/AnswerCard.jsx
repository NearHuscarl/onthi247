import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import PercentageBar, { PercentageBarText } from './PercentageBar';
import { answerProps } from '../utilities/proptypes';
import styled, { appColors } from '../styles';

const AnswerBar = styled(PercentageBar)`
	padding: 0.3rem 3.5rem;

	/* the white circle at top left */
	&::after {
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
`;

const AnswerText = styled.div`
	position: relative;

	font-size: 1.7rem;
	color: ${appColors.greyDark3};
	z-index: 2;
`;

export function AnswerPercentageBar({ answer }) {
	const value = Math.round(answer.percentage * 100);
	return (
		<AnswerBar value={value}>
			<AnswerText>{answer.text}</AnswerText>
			<PercentageBarText>{`${value}% người tham gia lựa chọn`}</PercentageBarText>
		</AnswerBar>
	);
}

AnswerPercentageBar.propTypes = {
	answer: answerProps.isRequired,
};

export default function AnswerCard({ question, answers }) {
	return (
		<Card>
			<div className='h3'>{question}</div>
			<div className='mb-sm' />
			{answers.map((a) => (
				<React.Fragment key={a.text}>
					<AnswerPercentageBar answer={a} />
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
