import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ads from '../components/Ads';
import Filters from '../layout/Filters';
import { Standing } from '../components/Standing';
import ExamPreviewList from '../components/ExamPreviewList';
import Pagination from '../components/Pagination';
import { SizedBox } from '../components/Common';
import ExamCardList, { Recommend } from '../components/ExamCardList';
import { examProps, rankProps } from '../utilities/proptypes';
import ContentContainer from '../layout/ContentContainer';
import styled from '../styles';

const Content = styled.div`
	display: flex;
	margin-top: 3.6rem;
	margin-bottom: 4.1rem;
`;
const ColLeft = styled.div`
	width: 64.7rem;
	margin-right: 3.3rem;
`;
const ColRight = styled.div`
	flex: 0 1;
`;

const ExamPage = ({
	chemistryExams,
	nationalExams,
	standing,
	monthlyStanding,
	weeklyStanding,
}) => (
	<main className='exams'>
		<Filters
			title='Danh sách bài tập'
			subTitle='Có tất cả 300 bài tập trong danh sách'
		/>
		<ContentContainer>
			<Content>
				<ColLeft>
					<ExamPreviewList exams={chemistryExams} />
				</ColLeft>
				<ColRight>
					<Standing standing={standing} title='Bảng xếp hạng chung' />
					<SizedBox height={1} />
					<Standing
						standing={monthlyStanding}
						title='Bảng xếp hạng tháng'
					/>
					<SizedBox height={1} />
					<Standing standing={weeklyStanding} title='Bảng xếp hạng tuần' />
					<SizedBox height={1} />
					<Ads />
				</ColRight>
			</Content>
			<Pagination />
			<Recommend>
				<ExamCardList exams={nationalExams} title='Các bài tập nổi bật' e />
				<div className='mb-md' />
				<ExamCardList exams={nationalExams} title='Các bài tập mới nhất' />
			</Recommend>
		</ContentContainer>
	</main>
);

ExamPage.propTypes = {
	standing: PropTypes.arrayOf(rankProps).isRequired,
	monthlyStanding: PropTypes.arrayOf(rankProps).isRequired,
	weeklyStanding: PropTypes.arrayOf(rankProps).isRequired,
	chemistryExams: PropTypes.arrayOf(examProps).isRequired,
	nationalExams: PropTypes.arrayOf(examProps).isRequired,
};

const mapStateToProps = (state) => ({
	standing: state.standings.standing,
	monthlyStanding: state.standings.monthlyStanding,
	weeklyStanding: state.standings.weeklyStanding,
	chemistryExams: Object.values(state.exams.chemistry),
	nationalExams: Object.values(state.exams.national),
});

export default connect(mapStateToProps, null)(ExamPage);
