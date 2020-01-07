import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from '../components/Tabs';
import ExamCardList, { Recommend } from '../components/ExamCardList';
import { examProps, examRankProps } from '../utilities/proptypes';
import ExamPreviewSection from '../components/ExamPreviewSection';
import ScoreCard from '../components/ScoreCard';
import { SizedBox } from '../components/Common';
import { H4 } from '../components/Headings';
import TeacherDetail from '../components/TeacherDetail';
import Breadcrumbs, { routes } from '../components/Breadcrumb';
import ContentContainer from '../layout/ContentContainer';
import ExamStanding from '../components/ExamStanding';
import styled, { helperStyles } from '../styles';
import { chemistryTeacher } from '../data/teachers';
import ExamHistory from '../components/ExamHistory';
import examHistory from '../data/examHistory';

const Content = styled.div`
	${helperStyles.marginTopLarge}

	.tabs {
		margin-top: 2rem;
	}

	margin-bottom: 7rem;
`;
const Top = styled.div`
	display: flex;

	& > :last-child {
		flex: 1 0 auto;
		margin-left: 3.5rem;
	}
`;
const SubHeader = styled(H4)`
	flex: 0 0 100%;
	margin-top: 1.6rem;
`;

function ExamPreviewPage({ exam, standing, chemistryExams, nationalExams }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Breadcrumbs path={[routes.home, routes.exercise, exam.title]} />
			<ContentContainer as='main'>
				<Content>
					<Top>
						<div>
							<ExamPreviewSection exam={exam} />
							<SubHeader>Giới thiệu chung</SubHeader>
							<div>{exam.description}</div>
						</div>
						<ScoreCard />
					</Top>
					<Tabs className='tabs'>
						<TabList>
							<Tab>Bảng xếp hạng</Tab>
							<Tab>Lịch sử làm bài</Tab>
						</TabList>
						<TabPanel>
							<ExamStanding list={standing.slice(0, 4)} />
						</TabPanel>
						<TabPanel>
							<ExamHistory list={examHistory} />
						</TabPanel>
					</Tabs>
					<SizedBox height={3} />
					<TeacherDetail teacher={chemistryTeacher} />
					<Recommend>
						<ExamCardList
							exams={chemistryExams}
							title='Các bài tập có liên quan'
						/>
						<div className='mb-md' />
						<ExamCardList
							exams={nationalExams}
							title='Các bài tập nổi bật'
						/>
						<div className='mb-md' />
						<ExamCardList
							exams={nationalExams}
							title='Các bài tập mới nhất'
						/>
					</Recommend>
				</Content>
			</ContentContainer>
		</>
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
