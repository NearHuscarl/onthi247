import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export function AnswerDetail({ answer }) {
	const chance = (answer.percentage * 100).toFixed(0);
	return (
		<div className='answer'>
			<div className='answer__text'>{answer.text}</div>
			<div className='answer__stats'>{`${chance}% người tham gia lựa chọn`}</div>
			{/* https://stackoverflow.com/a/28269950/9449426 */}
			<div className='answer-after' style={{ width: `${chance}%` }} />
		</div>
	);
}

const answerPropTypes = PropTypes.shape({
	text: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
});

AnswerDetail.propTypes = {
	answer: answerPropTypes.isRequired,
};

export default function AnswerCard({ question, answers }) {
	return (
		<Card className='answer-card'>
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
	answers: PropTypes.arrayOf(answerPropTypes).isRequired,
};
