import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ExamCardList from '../components/ExamCardList';
import { examProps, examRankProps } from '../utilities/proptypes';
import ScoreCard from '../components/ScoreCard';
import Ads from '../components/Ads';
import Line from '../components/Line';
import { ExamStanding, ExamRank } from '../components/Standing';
import ContentContainer from '../layout/ContentContainer';
import { helperStyles } from '../constants';

const Content = styled.div`
	display: flex;
	${helperStyles.marginTopLarge}
`;
const ColumnLeft = styled.div`
	margin-right: 4.5rem;
	max-width: 67rem;
`;
const ColumnRight = styled.div`
	flex: 0 1;
`;

const init = () => {
	window.scrollTo(0, 0);
};

function ExamPreviewPage({ exam, standing, chemistryExams, nationalExams }) {
	const history = useHistory();

	useEffect(() => {
		init();
	}, []);

	return (
		<ContentContainer mainTag>
			<Content>
				<ColumnLeft>
					<div className='exam-preview__main'>
						<img
							src={exam.image}
							className='exam-preview__img'
							alt='exam preview'
						/>
						<h2 className='exam-preview__heading h2'>{exam.title}</h2>
						<div className='exam-preview__heading--sub'>{`${exam.questionCount} câu hỏi - Trình độ ${exam.difficulty}`}</div>
						<div className='exam-preview__stats'>
							{`Phát hành: ${
								exam.publish
							} - Lượt xem: ${exam.views.toLocaleString()} - Lượt làm bài: ${exam.attempts.toLocaleString()}`}
						</div>
						<div className='exam-preview__actions'>
							<button
								type='button'
								className='btn bold mr-sm'
								onClick={() =>
									history.push(`/exams/${exam.id}/questions`)
								}
							>
								<FontAwesomeIcon className='btn__icon' icon={faPlay} />
								Bắt đầu làm bài
							</button>
							<button type='button' className='btn btn--white'>
								<FontAwesomeIcon className='btn__icon' icon={faHeart} />
								Lưu vào danh sách yêu thích
							</button>
						</div>
					</div>
					<h4 className='exam-preview__intro-h h4'>Giới thiệu chung</h4>
					<div className='exam-preview__desc'>{exam.description}</div>{' '}
					<Tabs className='exam-preview__tabs'>
						<TabList>
							<Tab>Bảng xếp hạng</Tab>
							<Tab>Lịch sử làm bài</Tab>
						</TabList>

						<TabPanel>
							{standing.slice(0, 2).map((u, index) => (
								<React.Fragment key={u.name}>
									<ExamRank info={u} />
									{index !== 2 - 1 ? <Line small /> : null}
								</React.Fragment>
							))}
						</TabPanel>
						<TabPanel>
							<h2>The entire history of u</h2>
						</TabPanel>
					</Tabs>
					<div className='recommend'>
						<ExamCardList
							slidesToShow={3}
							exams={chemistryExams}
							title='Các bài tập có liên quan'
						/>
						<div className='mb-md' />
						<ExamCardList
							slidesToShow={3}
							exams={nationalExams}
							title='Các bài tập nổi bật'
						/>
						<div className='mb-md' />
						<ExamCardList
							slidesToShow={3}
							exams={nationalExams}
							title='Các bài tập mới nhất'
						/>
					</div>
				</ColumnLeft>
				<ColumnRight>
					<ScoreCard className='mb-md' />
					<ExamStanding
						className='mb-md'
						standing={standing}
						title='Bảng xếp hạng top 10'
					/>
					<Ads />
				</ColumnRight>
			</Content>
		</ContentContainer>
	);
}

ExamPreviewPage.propTypes = {
	exam: examProps.isRequired,
	standing: PropTypes.arrayOf(examRankProps).isRequired,
	chemistryExams: PropTypes.arrayOf(examProps).isRequired,
	nationalExams: PropTypes.arrayOf(examProps).isRequired,
};

const mapStateToProps = (state, props) => ({
	exam: state.exams.chemistry[props.match.params.id],
	standing: state.examStanding['0001'],
	chemistryExams: Object.values(state.exams.chemistry),
	nationalExams: Object.values(state.exams.national),
});

export default connect(mapStateToProps, null)(ExamPreviewPage);
