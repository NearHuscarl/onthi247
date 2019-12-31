import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnswerCard from '../components/AnswerCard';
import Card from '../components/Card';
import QuestionGrid from '../components/QuestionGrid';
import CommentSection from '../components/CommentSection';
import Ads from '../components/Ads';
import ExamCardList, { Recommend } from '../components/ExamCardList';
import { Line, SizedBox } from '../components/Common';
import { H2, H3, H4 } from '../components/Headings';
import { WhiteButton } from '../components/Buttons';
import { examProps } from '../utilities/proptypes';
import ContentContainer from '../layout/ContentContainer';
import styled, { appColors, theme } from '../styles';
import congratsImg from '../../public/images/congrats.jpg';

const ResultSummary = styled.div`
	padding-top: 1.5rem;
`;
const SummaryDescription = styled.div`
	background-blend-mode: darken;
	background-image: url(${congratsImg});
	background-size: cover;
	background-position: center;
	color: ${appColors.white};

	height: 18.3rem;
	border-radius: ${theme.borderRound};

	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const SummaryScore = styled.div`
	font-size: 3.6rem;
	font-weight: 600;
	line-height: 1;
`;
const SummaryExp = styled.div`
	margin: 1.6rem 0;
	font-weight: 600;
	font-size: 1.5rem;
`;
const SummaryRank = styled.div`
	text-align: center;
	width: 23rem;
`;

const gutter = '1.4rem';
const Detail = styled.div`
	padding-top: 1.5rem;
`;
const DetailContent = styled.div`
	& > :not(:last-child) {
		margin-right: ${gutter};
	}
	display: flex;
`;
const DetailCol = styled.div`
	display: flex;
	flex-direction: column;

	& > :not(:last-child) {
		margin-bottom: ${gutter};
	}
`;
const DetailCol1 = styled(DetailCol)`
	width: 16rem;
`;
const DetailCol2 = styled(DetailCol)``;
const DetailCol3 = styled(DetailCol)`
	width: 21rem;
`;

const ExamResultPage = ({
	exam,
	nationalExams,
	selectedQuestion,
	timeTaken,
	score,
}) => {
	const { id, title, questionCount, difficulty, questions } = exam;

	return (
		<ContentContainer as='main'>
			<H2 className='mt-md'>
				{title}
				<H2
					sub
					className='mt-tn'
				>{`${questionCount} câu hỏi - Trình độ ${difficulty}`}</H2>
			</H2>
			<Line />
			<ResultSummary>
				<H2 className='mb-sm'>Kết quả tổng quan</H2>
				<SummaryDescription>
					<SummaryScore>{`${score}/${questions.length}`}</SummaryScore>
					<div>{`${timeTaken.minutes} phút ${timeTaken.seconds} giây`}</div>
					<SummaryExp>+600 exp</SummaryExp>
					<SummaryRank>
						Xếp hạng 120 trên tổng số 360 người tham gia làm bài
					</SummaryRank>
				</SummaryDescription>
			</ResultSummary>
			<Detail>
				<H2 className='mb-sm'>Đáp án và lời giải chi tiết</H2>
				<DetailContent>
					<DetailCol1>
						<Card>
							<H4 className='mb-0'>Câu hỏi 01</H4>
							<span className='mb-sm'>Chưa trả lời</span>
							<WhiteButton type='button'>Lưu lại</WhiteButton>
						</Card>
					</DetailCol1>
					<DetailCol2>
						<AnswerCard
							question={questions[selectedQuestion].question}
							answers={questions[selectedQuestion].answers}
						/>
						<Card>
							<H3>Lời giải chi tiết</H3>
							<div>
								{questions[selectedQuestion].answerDetail
									.split('\n')
									.map((s) => (
										<p key={s}>{s}</p>
									))}
							</div>
						</Card>
						<CommentSection />
					</DetailCol2>
					<DetailCol3>
						<QuestionGrid questionCount={questions.length} examId={id} />
						<Ads />
					</DetailCol3>
				</DetailContent>
			</Detail>
			<Recommend>
				<ExamCardList exams={nationalExams} title='Bạn có thể quan tâm' />
				<div className='mb-md' />
				<ExamCardList exams={nationalExams} title='Các bài tập nổi bật' />
				<div className='mb-md' />
				<ExamCardList exams={nationalExams} title='Các bài tập mới nhất' />
			</Recommend>
			<SizedBox height={7} />
		</ContentContainer>
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
