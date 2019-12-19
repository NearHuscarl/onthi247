import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import range from 'lodash/range';
import { setExamResultQuestion } from '../actions/examResult';
import Card from './Card';
import { helperStyles } from '../constants';

const Container = styled(Card)`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, 3rem);
	// grid-template-rows: repeat(auto-fit, 3rem) min-content;
	gap: 0.4rem;

	padding: 2rem;
`;
const QButton = styled.button`
	width: 3rem;
	height: 3rem;
	padding: 0;
	font-size: 1.3rem;
`;
const SubmitButton = styled.button`
	padding: 0.7rem 1.5rem;
	margin-top: 2.2rem;
	grid-column: 1 / -1;
	${helperStyles.bold}
`;

function QuestionGrid({
	questionCount,
	examId,
	selectedQuestion,
	// eslint-disable-next-line no-shadow
	setExamResultQuestion,
}) {
	const history = useHistory();
	return (
		<Container>
			{range(0, questionCount).map((i) => (
				<QButton
					key={i}
					type='button'
					className={classNames({
						btn: true,
						'btn--orange': selectedQuestion === i,
						'btn--white': selectedQuestion !== i,
					})}
					onClick={() => setExamResultQuestion(i)}
				>
					{i + 1}
				</QButton>
			))}
			<SubmitButton
				className='btn'
				type='button'
				onClick={() => history.push(`/exams/${examId}/questions`)}
			>
				Làm lại bài tập
			</SubmitButton>
		</Container>
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
