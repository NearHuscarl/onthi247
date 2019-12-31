import React from 'react';
import Filters from '../layout/Filters';
import Pagination from '../components/Pagination';
import CoursePreviewList from '../components/CoursePreviewList';
import ContentContainer from '../layout/ContentContainer';
import styled from '../styles';
import courses from '../data/courses';

const Main = styled.main`
	margin-bottom: 7rem;
`;

const Content = styled.div`
	display: flex;
	margin-top: 3.6rem;
	margin-bottom: 4.1rem;
`;

const CoursesPage = () => (
	<Main>
		<Filters
			title='Danh sách khóa học'
			subTitle='Có tất cả 300 bài tập trong danh sách'
		/>
		<ContentContainer>
			<Content>
				<CoursePreviewList courses={courses} />
			</Content>
			<Pagination />
		</ContentContainer>
	</Main>
);

export default CoursesPage;
