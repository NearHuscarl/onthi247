import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ExamCardList from '../components/ExamCardList';
import { examProps, examRankProps } from '../utilities/proptypes';
import ScoreCard from '../components/ScoreCard';
import Ads from '../components/Ads';
import { ExamStanding, ExamRank } from '../components/Standing';

const init = () => {
	window.scrollTo(0, 0);
};

function ExamPreviewPage({ exam, standing, chemistryExams, nationalExams }) {
	useEffect(() => {
		init();
	}, []);

	return (
		<main className='content-container'>
			<div className='preview__content mt-lg'>
				<div className='preview__col-left'>
					<div className='exam-preview__main'>
						<img
							src={exam.image}
							className='exam-preview__img'
							alt='exam preview'
						/>
						<h2 className='exam-preview__heading h2'>{exam.title}</h2>
						<div className='exam-preview__heading--sub'>{`${
							exam.questionCount
						} câu hỏi - Trình độ ${exam.difficulty}`}</div>
						<div className='exam-preview__stats'>
							{`Phát hành: ${
								exam.publish
							} - Lượt xem: ${exam.views.toLocaleString()} - Lượt làm bài: ${exam.attempts.toLocaleString()}`}
						</div>
						<div className='exam-preview__actions'>
							<button type='button' className='btn mr-sm'>
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
									{index !== 2 - 1 ? <div className='line' /> : null}
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
				</div>
				<div className='preview__col-right'>
					<ScoreCard className='mb-md' />
					<ExamStanding
						className='mb-md'
						standing={standing}
						title='Bảng xếp hạng top 10'
					/>
					<Ads />
				</div>
			</div>
		</main>
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

export default connect(
	mapStateToProps,
	null,
)(ExamPreviewPage);
