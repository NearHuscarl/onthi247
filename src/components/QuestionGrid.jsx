import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import range from 'lodash/range';
import { setExamResultQuestion } from '../actions/examResult';
import Card from './Card';
import Button, { PrimaryWhiteButton } from './Buttons';
import styled, { helperStyles } from '../styles';

const Container = styled(Card)`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, 3rem);
	// grid-template-rows: repeat(auto-fit, 3rem) min-content;
	gap: 0.4rem;

	padding: 2rem;
`;
const QButton = styled(PrimaryWhiteButton)`
	width: 3rem;
	height: 3rem;
	padding: 0;
	font-size: 1.3rem;
`;
const SubmitButton = styled(Button)`
	padding: 0.7rem 1.5rem;
	margin-top: 2.2rem;
	grid-column: 1 / -1;
	${helperStyles.bold}
`;

function QuestionGrid({
	questionCount,
	examId,
	// eslint-disable-next-line no-shadow
	setExamResultQuestion,
}) {
	const history = useHistory();
	return (
		<Container>
			{range(0, questionCount).map((i) => {
				return (
					<QButton
						key={i}
						type='button'
						onClick={() => setExamResultQuestion(i)}
					>
						{i + 1}
					</QButton>
				);
			})}
			<SubmitButton
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
	setExamResultQuestion: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	setExamResultQuestion: (question) =>
		dispatch(setExamResultQuestion(question)),
});

export default connect(null, mapDispatchToProps)(QuestionGrid);
