import React from 'react';
import { SizedBox } from '../components/Common';
import VideoPlayImage from '../../public/images/video-play-icon.jpg';
import ThumbnailImage from '../../public/images/video-thumbnail.jpg';
import { Tab, Tabs, TabList, TabPanel } from '../components/Tabs';
import styled from '../styles';
import CourseHeader from '../layout/CourseHeader';
import CourseProgressList from '../components/CourseProgressList';
import { courseDetail } from '../data/courses';
import CourseDetailPageSummary from './CourseDetailPage_Summary';

const Content = styled.main`
	display: flex;
`;
const ColLeft = styled.div`
	max-width: 85rem;
`;
const ColRight = styled.div`
	width: 35rem;
	flex: 1 0 auto;
	background-color: #dedfe0;
`;

const Video = styled.div`
	position: relative;

	[alt='play'] {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 30%;
	}

	[alt='thumbnail'] {
		width: 100%;
		object-fit: cover;
	}
`;

const StyledTabs = styled(Tabs)`
	padding: 4.5rem;

	[role='tablist'] {
		margin-bottom: 2.5rem;
	}
`;

const ExercisesPage = () => {
	return (
		<>
			<CourseHeader title={courseDetail.title} />
			<Content>
				<ColLeft>
					<Video>
						<img src={ThumbnailImage} alt='thumbnail' />
						<img src={VideoPlayImage} alt='play' />
					</Video>
					<StyledTabs>
						<TabList>
							<Tab>Tổng quan</Tab>
							<Tab>Bình luận & Hỏi đáp</Tab>
							<Tab>Đánh dấu</Tab>
							<Tab>Thông báo</Tab>
						</TabList>
						<TabPanel>
							<CourseDetailPageSummary course={courseDetail} />
						</TabPanel>
						<TabPanel>
							<div>The entire history of u</div>
						</TabPanel>
						<TabPanel>
							<div>The entire history of u</div>
						</TabPanel>
						<TabPanel>
							<div>The entire history of u</div>
						</TabPanel>
					</StyledTabs>
				</ColLeft>
				<ColRight>
					<CourseProgressList courseProgress={courseDetail.summary} />
				</ColRight>
			</Content>
		</>
	);
};

export default ExercisesPage;
