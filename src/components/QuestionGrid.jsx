import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import range from 'lodash/range';
import { setExamResultQuestion } from '../actions/examResult';
import Card from './Card';

function QuestionGrid({
	questionCount,
	examId,
	selectedQuestion,
	// eslint-disable-next-line no-shadow
	setExamResultQuestion,
}) {
	const history = useHistory();
	return (
		<Card className='question-grid'>
			{range(0, questionCount).map((i) => (
				<button
					key={i}
					type='button'
					className={classNames({
						'btn question-grid__index': true,
						'btn--orange': selectedQuestion === i,
						'btn--white': selectedQuestion !== i,
					})}
					onClick={() => setExamResultQuestion(i)}
				>
					{i + 1}
				</button>
			))}
			<button
				className='btn bold question-grid__submit'
				type='button'
				onClick={() => history.push(`/exams/${examId}/questions`)}
			>
				Làm lại bài tập
			</button>
		</Card>
	);
}

QuestionGrid.propTypes = {
	questionCount: PropTypes.number.isRequired,
	examId: PropTypes.string.isRequired,
	selectedQuestion: PropTypes.number.isRequired,
	setExamResultQuestion: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	selectedQuestion: state.examResult.selectedQuestion,
});

const mapDispatchToProps = (dispatch) => ({
	setExamResultQuestion: (question) =>
		dispatch(setExamResultQuestion(question)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionGrid);
