import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Countdown, { zeroPad } from 'react-countdown-now';
import classNames from 'classnames';
import Card from './Card';
import { setTimeTaken, startSetScore } from '../actions/examResult';


const timeTaken = {
	minutes: 0,
	seconds: 0,
};
const Counter = (
	<Countdown
		renderer={({ minutes, seconds }) => {
			timeTaken.minutes = minutes;
			timeTaken.seconds = seconds;
			return (<span>
				{zeroPad(minutes)}:{zeroPad(seconds)}
			</span>);
		}}
		date={Date.now() + (10 * 60 + 56) * 1000}
	/>
);

function QuestionProgress({
	examId,
	questions,
	resetExam,
	// eslint-disable-next-line no-shadow
	startSetScore,
	// eslint-disable-next-line no-shadow
	setTimeTaken,
}) {
	const history = useHistory();
	const questionArray = Object.values(questions);
	const questionsAnswered = questionArray.reduce((prev, q) => {
		if (q.answer !== -1) {
			return prev + 1;
		}
		return prev;
	}, 0);
	const progress = ((questionsAnswered / questionArray.length) * 100).toFixed(
		0,
	);

	return (
		<Card className='question-progress'>
			<div className='question-progress__time-lbl'>Thời gian làm bài</div>
			<div className='question-progress__time'>{Counter}</div>
			<div className='question-progress__stats'>
				{`Đã trả lời ${questionsAnswered}/${questionArray.length} câu (${progress}%)`}
			</div>
			<div className='question-progress__bar'>
				<div
					className='question-progress__bar--before'
					style={{ width: `${progress}%` }}
				/>
			</div>
			{questionArray.map(({ answer }, index) => {
				const key = index + 1;
				return (
					<button
						key={key}
						type='button'
						className={classNames({
							'btn question-progress__index': true,
							'btn--orange': answer !== -1,
							'btn--white': answer === -1,
						})}
					>
						{key}
					</button>
				);
			})}
			<div className='question-progress__actions'>
				<button
					className='btn btn--white'
					type='button'
					onClick={resetExam}
				>
					Làm lại
				</button>
				<button
					className='btn'
					type='button'
					onClick={() => {
						startSetScore(examId);
						setTimeTaken(timeTaken);
						history.push(`/exams/${examId}/result`);
					}}
				>
					Nộp bài
				</button>
			</div>
		</Card>
	);
}

QuestionProgress.propTypes = {
	questions: PropTypes.objectOf(
		PropTypes.shape({
			flag: PropTypes.bool,
			answer: PropTypes.number,
		}),
	).isRequired,
	resetExam: PropTypes.func.isRequired,
	examId: PropTypes.string.isRequired,
	startSetScore: PropTypes.func.isRequired,
	setTimeTaken: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	startSetScore: (examId) => dispatch(startSetScore(examId)),
	setTimeTaken: (time) => dispatch(setTimeTaken(time)),
});

export default connect(null, mapDispatchToProps)(QuestionProgress);
