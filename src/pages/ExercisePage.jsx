import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ads from '../components/Ads';
import Filters from '../layout/Filters';
import { StandingSideBar } from '../components/ExerciseStandingSideBar';
import ExerciseList from '../components/ExerciseList';
import Pagination from '../components/Pagination';
import { SizedBox } from '../components/Common';
import BreadCrumb, { routes, breadCrumbPathProps } from '../components/Breadcrumb';
import ExerciseCarousel, { Recommend } from '../components/ExerciseCarousel';
import ContentContainer from '../layout/ContentContainer';
import { exerciseProps, rankProps } from '../utilities/proptypes';
import styled from '../styles';

const Main = styled.main`
	margin-bottom: 7rem;
`;
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

export const ExercisePageBuilder = ({
	path,
	exercises,
	recommends,
	standing,
	monthlyStanding,
	weeklyStanding,
	filter,
}) => (
	<Main>
		<BreadCrumb path={path} />
		{filter}
		<ContentContainer>
			<Content>
				<ColLeft>
					<ExerciseList list={exercises} />
				</ColLeft>
				<ColRight>
					<StandingSideBar
						standing={standing}
						title='Bảng xếp hạng chung'
					/>
					<SizedBox height={1} />
					<StandingSideBar
						standing={monthlyStanding}
						title='Bảng xếp hạng tháng'
					/>
					<SizedBox height={1} />
					<StandingSideBar
						standing={weeklyStanding}
						title='Bảng xếp hạng tuần'
					/>
					<SizedBox height={1} />
					<Ads />
				</ColRight>
			</Content>
			<Pagination />
			<Recommend>
				{recommends.map((r, i) => {
					const key = i;
					return (
						<React.Fragment key={key}>
							<ExerciseCarousel list={r} title='Các bài tập nổi bật' e />
							{i !== recommends.length - 1 && <div className='mb-md' />}
						</React.Fragment>
					);
				})}
			</Recommend>
		</ContentContainer>
	</Main>
);

ExercisePageBuilder.propTypes = {
	path: breadCrumbPathProps.isRequired,
	filter: PropTypes.node.isRequired,
	standing: PropTypes.arrayOf(rankProps).isRequired,
	monthlyStanding: PropTypes.arrayOf(rankProps).isRequired,
	weeklyStanding: PropTypes.arrayOf(rankProps).isRequired,
	exercises: PropTypes.arrayOf(exerciseProps).isRequired,
	recommends: PropTypes.arrayOf(PropTypes.arrayOf(exerciseProps)).isRequired,
};

const ExercisePage = ({
	chemistryExercises,
	recommendedExams,
	standing,
	monthlyStanding,
	weeklyStanding,
}) => (
	<ExercisePageBuilder
		path={[routes.home, routes.exercise]}
		exercises={chemistryExercises}
		recommends={[recommendedExams, recommendedExams]}
		standing={standing}
		monthlyStanding={monthlyStanding}
		weeklyStanding={weeklyStanding}
		filter={
			<Filters
				title='Danh sách bài tập'
				subTitle='Có tất cả 300 bài tập trong danh sách'
			/>
		}
	/>
);

ExercisePage.propTypes = {
	standing: PropTypes.arrayOf(rankProps).isRequired,
	monthlyStanding: PropTypes.arrayOf(rankProps).isRequired,
	weeklyStanding: PropTypes.arrayOf(rankProps).isRequired,
	chemistryExercises: PropTypes.arrayOf(exerciseProps).isRequired,
	recommendedExams: PropTypes.arrayOf(exerciseProps).isRequired,
};

const mapStateToProps = (state) => ({
	standing: state.standings.standing.slice(0, 5),
	monthlyStanding: state.standings.monthlyStanding.slice(0, 5),
	weeklyStanding: state.standings.weeklyStanding.slice(0, 5),
	chemistryExercises: Object.values(state.exercises.chemistry),
	recommendedExams: Object.values(state.exercises.examGeography),
});

export default connect(mapStateToProps, null)(ExercisePage);
