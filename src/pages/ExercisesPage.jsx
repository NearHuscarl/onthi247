import React from 'react';
import Ads from '../components/Ads';
import Filters from '../layout/Filters';
import ExercisePreviewList from '../components/ExercisePreviewList';
import Pagination from '../components/Pagination';
import { SizedBox } from '../components/Common';
import ExerciseListSideBar from '../components/ExerciseListSideBar';
import ContentContainer from '../layout/ContentContainer';
import styled from '../styles';
import exercises, { sidebarExercises } from '../data/exercises';

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

const ExercisesPage = () => (
	<main>
		<Filters
			title='Danh sách bài tập'
			subTitle='Có tất cả 300 bài tập trong danh sách'
		/>
		<ContentContainer>
			<Content>
				<ColLeft>
					<ExercisePreviewList exercises={exercises} />
				</ColLeft>
				<ColRight>
					<ExerciseListSideBar
						title='Tài liệu nổi bật'
						exercises={sidebarExercises}
					/>
					<SizedBox height={1} />
					<ExerciseListSideBar
						title='Tài liệu mới nhất'
						exercises={sidebarExercises}
					/>
					<SizedBox height={1} />
					<Ads />
				</ColRight>
			</Content>
			<Pagination />
			<SizedBox height={7} />
		</ContentContainer>
	</main>
);

export default ExercisesPage;
