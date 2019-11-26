import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card';
import { setExamQuestionFlag } from '../actions/examQuestions';

// eslint-disable-next-line no-shadow
function QuestionFlagCard({ id, index, flag, setExamQuestionFlag }) {
	return (
		<Card
			className={classNames({
				'question-flag-card': true,
				'question-flag-card--flag': flag,
			})}
		>
			<h4 className='h4 mb-0'>Câu hỏi {index + 1}</h4>
			<span className='mb-sm'>Chưa trả lời</span>
			<button
				type='button'
				className='btn btn--white'
				onClick={() => {
					setExamQuestionFlag(id, !flag);
				}}
			>
				{flag ? 'Bỏ đặt cờ' : 'Đặt cờ'}
			</button>
			<div
				className={classNames({
					'question-flag-card__flag': true,
					'question-flag-card--flag__flag': flag,
				})}
			>
				<FontAwesomeIcon icon={faFlag} />
			</div>
		</Card>
	);
}

QuestionFlagCard.propTypes = {
	id: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	flag: PropTypes.bool.isRequired,
	setExamQuestionFlag: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	setExamQuestionFlag: (id, flag) => dispatch(setExamQuestionFlag(id, flag)),
});

export default connect(null, mapDispatchToProps)(QuestionFlagCard);
