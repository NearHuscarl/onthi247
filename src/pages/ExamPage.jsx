import React from 'react';
import { objectOf } from 'prop-types';
import { connect } from 'react-redux';
import Ads from '../components/Ads';
import Filters from '../layout/Filters';
import Standing from '../components/Standing';
import ExamPreviewList from '../components/ExamPreviewList';
import Pagination from '../components/Pagination';
import ExamCardList from '../components/ExamCardList';
import { examProps, standingProps } from '../utilities/proptypes';

const ExamPage = ({ exams, standing, monthlyStanding, weeklyStanding }) => (
	<main className='exams'>
		<Filters />
		<div className='content-container'>
			<div className='exams__content'>
				<div className='exams__col-left'>
					<ExamPreviewList exams={Object.values(exams)} />
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
				<ExamCardList title='Các bài tập nổi bật' />
				<div className='mb-md' />
				<ExamCardList title='Các bài tập mới nhất' />
			</div>
		</div>
	</main>
);

ExamPage.propTypes = {
	standing: standingProps.isRequired,
	monthlyStanding: standingProps.isRequired,
	weeklyStanding: standingProps.isRequired,
	exams: objectOf(examProps).isRequired,
};

const mapStateToProps = (state) => ({
	standing: state.standings.standing,
	monthlyStanding: state.standings.monthlyStanding,
	weeklyStanding: state.standings.weeklyStanding,
	exams: state.exam,
});

export default connect(
	mapStateToProps,
	null,
)(ExamPage);
