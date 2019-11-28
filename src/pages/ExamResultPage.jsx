import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnswerCard from '../components/AnswerCard';
import Card from '../components/Card';
import QuestionGrid from '../components/QuestionGrid';
import CommentSection from '../components/CommentSection';
import Ads from '../components/Ads';
import ExamCardList from '../components/ExamCardList';
import { examProps } from '../utilities/proptypes';

const ExamResultPage = ({
	exam,
	nationalExams,
	selectedQuestion,
	timeTaken,
	score,
}) => {
	const { id, title, questionCount, difficulty, questions } = exam;

	return (
		<main className='content-container'>
			<h2 className='h2 mt-md'>
				{title}
				<div className='h2 h2--sub'>{`${questionCount} câu hỏi - Trình độ ${difficulty}`}</div>
			</h2>
			<div className='line' />
			<div className='result-summary'>
				<h2 className='h2 mb-sm'>Kết quả tổng quan</h2>
				<div className='result-text'>
					<div className='result-text__score'>{`${score}/${questions.length}`}</div>
					<div className='result-text__time'>{`${timeTaken.minutes} phút ${timeTaken.seconds} giây`}</div>
					<div className='result-text__exp'>+600 exp</div>
					<div className='result-text__rank'>
						Xếp hạng 120 trên tổng số 360 người tham gia làm bài
					</div>
				</div>
			</div>
			<div className='result-details'>
				<h2 className='h2 mb-sm'>Đáp án và lời giải chi tiết</h2>
				<div className='result-details__content'>
					<div className='result-details__col-1'>
						<Card>
							<h4 className='h4 mb-0'>Câu hỏi 01</h4>
							<span className='mb-sm'>Chưa trả lời</span>
							<button type='button' className='btn btn--white'>
								Lưu lại
							</button>
						</Card>
					</div>
					<div className='result-details__col-2'>
						<AnswerCard
							question={questions[selectedQuestion].question}
							answers={questions[selectedQuestion].answers}
						/>
						<Card className='ans-detail-card'>
							<div className='h3'>Lời giải chi tiết</div>
							<div>
								{questions[selectedQuestion].answerDetail
									.split('\n')
									.map((s) => (
										<p key={s}>{s}</p>
									))}
							</div>
						</Card>
						<CommentSection />
					</div>
					<div className='result-details__col-3'>
						<QuestionGrid questionCount={questions.length} examId={id} />
						<Ads />
					</div>
				</div>
			</div>
			<div className='recommend'>
				<ExamCardList exams={nationalExams} title='Bạn có thể quan tâm' />
				<div className='mb-md' />
				<ExamCardList exams={nationalExams} title='Các bài tập nổi bật' />
				<div className='mb-md' />
				<ExamCardList exams={nationalExams} title='Các bài tập mới nhất' />
			</div>
		</main>
	);
};

ExamResultPage.propTypes = {
	selectedQuestion: PropTypes.number.isRequired,
	exam: examProps.isRequired,
	nationalExams: PropTypes.arrayOf(examProps).isRequired,
	timeTaken: PropTypes.shape({
		minutes: PropTypes.number,
		seconds: PropTypes.number,
	}).isRequired,
	score: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
	selectedQuestion: state.examResult.selectedQuestion,
	exam: state.exams.chemistry[props.match.params.id],
	nationalExams: Object.values(state.exams.national),
	timeTaken: state.examResult.timeTaken,
	score: state.examResult.score,
});

export default connect(mapStateToProps, null)(ExamResultPage);