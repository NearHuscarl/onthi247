import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import range from 'lodash/range';
import { setExamResultQuestion } from '../actions/examResult';
import Card from './Card';

// eslint-disable-next-line no-shadow
function QuestionGrid({ questionCount, selectedQuestion, setExamResultQuestion }) {
	return (
		<Card className='question-grid'>
			{range(0, questionCount).map((i) => (
				<button
					key={i}
					type='button'
					className={
						'btn btn--padding-sm ' +
						(selectedQuestion === i ? 'btn--orange' : 'btn--white')
					}
					onClick={() => setExamResultQuestion(i)}
				>
					{i+1}
				</button>
			))}
			<button className='btn bold question-grid__btn' type='button'>
				Làm lại bài tập
			</button>
		</Card>
	);
}

QuestionGrid.propTypes = {
	questionCount: PropTypes.number.isRequired,
	selectedQuestion: PropTypes.number.isRequired,
	setExamResultQuestion: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	selectedQuestion: state.examResult.question,
});

const mapDispatchToProps = (dispatch) => ({
	setExamResultQuestion: (question) =>
		dispatch(setExamResultQuestion(question)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(QuestionGrid);
