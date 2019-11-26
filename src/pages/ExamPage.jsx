import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ads from '../components/Ads';
import Filters from '../layout/Filters';
import { Standing } from '../components/Standing';
import ExamPreviewList from '../components/ExamPreviewList';
import Pagination from '../components/Pagination';
import ExamCardList from '../components/ExamCardList';
import { examProps, rankProps } from '../utilities/proptypes';

const ExamPage = ({
	chemistryExams,
	nationalExams,
	standing,
	monthlyStanding,
	weeklyStanding,
}) => (
	<main className='exams'>
		<Filters />
		<div className='content-container'>
			<div className='exams__content'>
				<div className='exams__col-left'>
					<ExamPreviewList exams={chemistryExams} />
				</div>
				<div className='exams__col-right'>
					<Standing standing={standing} title='Bảng xếp hạng chung' />
					<Standing
						standing={monthlyStanding}
						title='Bảng xếp hạng tháng'
					/>
					<Standing standing={weeklyStanding} title='Bảng xếp hạng tuần' />
					<Ads />
				</div>
			</div>
			<Pagination />
			<div className='recommend'>
				<ExamCardList exams={nationalExams} title='Các bài tập nổi bật' e />
				<div className='mb-md' />
				<ExamCardList exams={nationalExams} title='Các bài tập mới nhất' />
			</div>
		</div>
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

export default connect(
	mapStateToProps,
	null,
)(ExamPage);
