import React from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ads from '../components/Ads';
import Filters from '../layout/Filters';
import { Line, SizedBox, Bold, FormattedText } from '../components/Common';
import { H3, H4 } from '../components/Headings';
import ExerciseListSideBar from '../components/ExerciseListSideBar';
import Tag, { TagGroup } from '../components/Tag';
import Button from '../components/Buttons';
import ContentContainer from '../layout/ContentContainer';
import styled, { appColors } from '../styles';
import { sidebarExercises, exerciseDetail } from '../data/exercises';
import ExercisePreviewSection from '../components/ExercisePreviewSection';
import CommentSection from '../components/CommentSection';

const Content = styled.div`
	display: flex;
	margin-top: 3.6rem;
	margin-bottom: 7rem;
`;
const ColLeft = styled.div`
	max-width: 69rem;
	margin-right: 3.3rem;

	h3 {
		margin-top: 2rem;
	}
	h3 + div {
		margin-bottom: 2rem;
	}
	& > h3:last-of-type {
		margin-bottom: 1rem;
	}
`;
const ColRight = styled.div`
	flex: 0 1;
`;

const Paragraph = styled(FormattedText)`
	white-space: break-spaces;
`;

const Download = styled.div`
	display: flex;
	padding-left: 2.8rem;
	justify-content: space-between;
	align-items: center;

	& > div {
		color: ${appColors.blue};
	}
`;

const ExercisePreviewPage = () => {
	const paper = exerciseDetail.paper.split(/(Câu \d\.)/);
	return (
		<main>
			<Filters
				title='Danh sách bài tập'
				subTitle='Có tất cả 300 bài tập trong danh sách'
			/>
			<ContentContainer>
				<Content>
					<ColLeft>
						<ExercisePreviewSection exercise={exerciseDetail} />
						<SizedBox height={0.5} />
						<H3>Giới thiệu chung</H3>
						<Line />
						<Paragraph>{exerciseDetail.summary}</Paragraph>
						<H3>Trích dẫn từ tài liệu</H3>
						<Line />
						<Paragraph>{exerciseDetail.paper}</Paragraph>
						<H3>Liên kết tải tài liệu</H3>
						<Line />
						<H4>Liên kết tải tài liệu chính thức</H4>
						<Download>
							<div>
								11 đề tham khảo môn Văn chốt thi THPT Quốc gia 2019
							</div>
							<Button type='button'>
								<FontAwesomeIcon icon={faDownload} />
								<span>Tải tài liệu</span>
							</Button>
						</Download>
						<H4>Liên kết tải tài liệu dự phòng</H4>
						<Download>
							<div>
								11 đề tham khảo môn Văn chốt thi THPT Quốc gia 2019
							</div>
							<Button type='button'>
								<FontAwesomeIcon icon={faDownload} />
								<span>Tải tài liệu</span>
							</Button>
						</Download>
						<H3>Tìm thêm</H3>
						<Line />
						<TagGroup>
							{exerciseDetail.tags.map((t) => (
								<Bold>
									<Tag key={t}>{t}</Tag>
								</Bold>
							))}
						</TagGroup>
						<H3>Bình luận</H3>
						<CommentSection />
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
						<ExerciseListSideBar
							title='Có thể bạn quan tâm'
							exercises={sidebarExercises}
						/>
						<SizedBox height={1} />
						<Ads />
					</ColRight>
				</Content>
			</ContentContainer>
		</main>
	);
};

export default ExercisePreviewPage;
