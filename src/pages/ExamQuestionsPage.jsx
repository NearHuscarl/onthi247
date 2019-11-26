import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash/get';
import QuestionCard from '../components/QuestionCard';
import QuestionFlagCard from '../components/QuestionFlagCard';
import Pagination from '../components/Pagination';
import { examProps } from '../utilities/proptypes';
import Ads from '../components/Ads';
import { setExamQuestions } from '../actions/examQuestions';
import QuestionProgress from '../components/QuestionProgress';

// eslint-disable-next-line no-shadow
function ExamQuestionsPage({ exam, setExamQuestions, questions }) {
	const { id, title, questionCount, difficulty } = exam;

	React.useEffect(() => {
		setExamQuestions(exam.questions);
	}, []);

	return (
		<main className='content-container'>
			<h2 className='h2 mt-md'>
				{title}
				<div className='h2 h2--sub'>{`${questionCount} câu hỏi - Trình độ ${difficulty}`}</div>
			</h2>
			<div className='line' />
			<div className='exam-question-page'>
				<section className='exam-question-page__left'>
					{exam.questions.slice(0, 10).map((q, index) => (
						<React.Fragment key={q.id}>
							<QuestionFlagCard
								id={q.id}
								index={index}
								flag={get(questions[q.id], 'flag', false)}
							/>
							<QuestionCard
								id={q.id}
								question={q.question}
								answers={q.answers.map((a) => a.text)}
							/>
						</React.Fragment>
					))}
				</section>
				<div className='exam-question-page__right'>
					<QuestionProgress
						examId={id}
						questions={questions}
						resetExam={() => setExamQuestions(exam.questions)}
					/>
					<Ads />
				</div>
			</div>
			<Pagination className='mt-lg' />
		</main>
	);
}

ExamQuestionsPage.propTypes = {
	exam: examProps.isRequired,
	questions: PropTypes.objectOf(
		PropTypes.shape({
			flag: PropTypes.bool,
			answer: PropTypes.number,
		}),
	).isRequired,
	setExamQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
	exam: state.exams.chemistry[props.match.params.id],
	questions: state.examQuestions.questions,
});

const mapDispatchToProps = (dispatch) => ({
	setExamQuestions: (questions) => dispatch(setExamQuestions(questions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExamQuestionsPage);
