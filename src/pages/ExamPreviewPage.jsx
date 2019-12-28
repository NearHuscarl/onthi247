import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from '../components/Tabs';
import ExamCardList, { Recommend } from '../components/ExamCardList';
import { examProps, examRankProps } from '../utilities/proptypes';
import ExamPreviewSection from '../components/ExamPreviewSection';
import ScoreCard from '../components/ScoreCard';
import Ads from '../components/Ads';
import Line from '../components/Line';
import { H2 } from '../components/Headings';
import { ExamStanding, ExamRank } from '../components/Standing';
import ContentContainer from '../layout/ContentContainer';
import styled, { helperStyles } from '../styles';

const Content = styled.div`
	display: flex;
	${helperStyles.marginTopLarge}

	.tabs {
		margin-top: 2rem;
	}
`;
const ColumnLeft = styled.div`
	margin-right: 4.5rem;
	max-width: 67rem;
`;
const ColumnRight = styled.div`
	flex: 0 1;

	& > :first-child {
		${helperStyles.marginBottomMedium}
	}
`;
const SubHeader = styled.h4`
	flex: 0 0 100%;
	margin-top: 1.6rem;
`;

const init = () => {
	window.scrollTo(0, 0);
};

function ExamPreviewPage({ exam, standing, chemistryExams, nationalExams }) {
	useEffect(() => {
		init();
	}, []);

	return (
		<ContentContainer as='main'>
			<Content>
				<ColumnLeft>
					<ExamPreviewSection exam={exam} />
					<SubHeader className='h4'>Giới thiệu chung</SubHeader>
					<div>{exam.description}</div>{' '}
					<Tabs className='tabs'>
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
							<H2>The entire history of u</H2>
						</TabPanel>
					</Tabs>
					<Recommend>
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
					</Recommend>
				</ColumnLeft>
				<ColumnRight>
					<ScoreCard />
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
