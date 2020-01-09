import React from 'react';
import ContentContainer from '../layout/ContentContainer';
import Breadcrumb, { routes } from '../components/Breadcrumb';
import { SizedBox } from '../components/Common';
import TeacherDetail from '../components/TeacherDetail';
import CourseList from '../components/CourseList';
import { H2 } from '../components/Headings';
import CourseReviewSection from '../components/CourseReviewSection';
import styled, { appColors } from '../styles';
import { babeDetail } from '../data/teachers';
import courses from '../data/courses';
import review from '../data/courseReviews';
import StatsBackground from '../../public/images/teacher-stats-background.jpg';

const Banner = styled.img`
	max-height: 48rem;
	display: flex;
	margin: 0 auto;
`;
const Stats = styled.div`
	background-image: url(${StatsBackground});
	background-position: center;
	background-size: cover;
	background-color: rgba(0, 0, 0, 0.6);
	background-blend-mode: darken;

	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-repeat: no-repeat;

	& > * {
		height: 20rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
		column-gap: 1rem;
	}

	.item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.value {
		color: ${appColors.primary};
		font-weight: 600;
		font-size: 3.2rem;
	}

	.label {
		color: ${appColors.white};
		font-size: 1.6rem;
	}
`;
const Content = styled(ContentContainer)`
	margin-top: 3.6rem;
	margin-bottom: 7rem;
`;

const TeacherDetailPage = () => {
	return (
		<main>
			<Breadcrumb
				path={[routes.home, routes.teacher, `Cô ${babeDetail.name}`]}
			/>
			<Banner src={babeDetail.banner} alt='banner' />
			<Stats>
				<ContentContainer>
					<div className='item'>
						<div className='value'>{babeDetail.rating}</div>
						<div className='label'>Sao đánh giá</div>
					</div>
					<div className='item'>
						<div className='value'>{babeDetail.ratings}</div>
						<div className='label'>Lượt đánh giá</div>
					</div>
					<div className='item'>
						<div className='value'>{babeDetail.students}</div>
						<div className='label'>Lượt đăng ký học</div>
					</div>
					<div className='item'>
						<div className='value'>{babeDetail.courses}</div>
						<div className='label'>Khóa học</div>
					</div>
					<div className='item'>
						<div className='value'>{babeDetail.experience}</div>
						<div className='label'>Năm kinh nghiệm</div>
					</div>
				</ContentContainer>
			</Stats>
			<Content>
				<SizedBox height={5.5} />
				<TeacherDetail teacher={babeDetail} />
				<SizedBox height={4} />
				<H2>Các khóa học đã phát hành</H2>
				<SizedBox height={1.5} />
				<CourseList courses={courses.slice(2, 4)} alwaysShowPrice />
				<SizedBox height={4} />
				<CourseReviewSection review={review} />
			</Content>
		</main>
	);
};

export default TeacherDetailPage;
