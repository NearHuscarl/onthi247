import React from 'react';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '../components/Pagination';
import ContentContainer from '../layout/ContentContainer';
import Breadcrumb from '../components/Breadcrumb';
import StarRating from '../components/StarRating';
import VideoPlayer from '../components/VideoPlayer';
import Button, { PrimaryWhiteButton } from '../components/Buttons';
import FeatureBox from '../components/FeatureBox';
import { Bold, SizedBox } from '../components/Common';
import { H1, H2, H4 } from '../components/Headings';
import styled, { appColors, theme } from '../styles';
import { courseDetail as course } from '../data/courses';
import Ads from '../components/Ads';

const HeaderBg = styled.div`
	background-color: ${appColors.darkBlue};
	color: ${appColors.greyLight1};
`;
const MainLayout = styled(ContentContainer)`
	display: grid;
	grid-template-columns: minmax(min-content, 60rem) 28rem;
	column-gap: 3rem;
`;
const Header = styled(MainLayout)`
	padding: 6rem 0;
	font-size: 1.5rem;

	h1,
	h2 {
		color: inherit;
	}

	h2 {
		font-weight: 400;
	}
`;
const Stats = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0;
`;
const Video = styled(VideoPlayer)`
	[alt='thumbnail'] {
		width: 28rem;
		height: 24rem;
	}
`;
const HeaderRight = styled.div`
	position: relative;
	z-index: 1;
`;
const HeaderRightContent = styled.div`
	position: absolute;
	background-color: ${appColors.white};
	color: ${theme.fontColor};

	& > :not(:last-child) {
		margin-bottom: 1.5rem;
	}

	& > button {
		border: solid 1px rgba(20, 23, 28, 0.1);
	}

	[alt='notads'] {
		margin-bottom: 2.2rem;
		img {
			width: 100%;
			height: 15rem;
		}
	}

	button {
		width: 100%;
		padding: 1rem 0.5rem;
		margin: 0.5rem 0;
		font-size: 1.5rem;
	}
`;
const Banner = styled.div`
	box-shadow: 0 0 1px 1px rgba(20, 23, 28, 0.1);
	border-bottom-left-radius: ${theme.borderRound};
	border-bottom-right-radius: ${theme.borderRound};

	& > :not(:first-child) {
		padding: 2rem 2.5rem;
	}

	.price {
		display: flex;
		align-items: center;
	}

	.discount {
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
	}

	ul {
		margin-left: 1rem;
	}
`;
const Price = styled.span`
	color: ${appColors.red};
	margin-right: 1rem;
	font-weight: 600;
	font-size: 2.2rem;
`;
const BuyToday = styled.div`
	display: flex;
	border-radius: ${theme.borderRound};
	box-shadow: none;

	.icon {
		flex: 0 0 4.5rem;
		background-color: ${appColors.primaryDark};
		border: solid 1px ${appColors.primaryDark};
		border-bottom-left-radius: ${theme.borderRound};
		border-top-left-radius: ${theme.borderRound};
		color: ${appColors.white};
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.text {
		flex: 1;
		padding-left: 0.5rem;
		padding: 1rem 0.75rem;
		border-bottom-right-radius: ${theme.borderRound};
		border-top-right-radius: ${theme.borderRound};
		border: solid 1px rgba(20, 23, 28, 0.1);
		border-left: none;

		strong {
			font-weight: 600;
			color: ${appColors.primaryDark};
		}
	}
`;

function CoursePreviewHeader() {
	return (
		<HeaderBg>
			<Header>
				<div>
					<H1>{course.title}</H1>
					<H2>{course.description}</H2>
					<Stats>
						<StarRating score={course.rating} maxScore={5} />
						<SizedBox width={1} />
						<span>{`${course.rating}/5 (${course.ratingCount} lượt đánh giá)`}</span>
						<SizedBox width={1} />
						<span>{`${course.students} lượt đăng ký học`}</span>
					</Stats>
					<Stats>
						<span>{`Giảng viên: ${course.teacher}`}</span>
						<SizedBox width={1} />
						<span>{`Lần cập nhật cuối: ${course.lastUpdate}`}</span>
					</Stats>
				</div>
				<HeaderRight>
					<HeaderRightContent>
						<Banner>
							<Video thumbnail={course.image} />
							<div>
								<div className='price'>
									<Price>{`${course.price.toLocaleString()}đ`}</Price>
									<strike>{`${course.originalPrice.toLocaleString()}đ`}</strike>
								</div>
								<div className='discount'>
									<span>Ưu đãi còn </span>
									<Bold as='span'>3 ngày </Bold>
									<span>nữa</span>
								</div>
								<Button type='button'>Thêm vào giỏ hàng</Button>
								<PrimaryWhiteButton type='button'>
									Mua ngay
								</PrimaryWhiteButton>
								<SizedBox height={1} />
								<div>
									<H4>Môn học</H4>
									<ul>
										<li>🢒 Sinh học</li>
									</ul>
									<H4>Ngày hết hạn</H4>
									<ul>
										<li>🢒 00:00, 30-06-2020</li>
									</ul>
									<H4>Khóa học bao gồm</H4>
									<ul>
										<li>🢒 24 giờ xem bài giảng</li>
										<li>🢒 18 bài viết</li>
										<li>🢒 20 bài tập trắc nghiệm</li>
									</ul>
								</div>
							</div>
						</Banner>
						<PrimaryWhiteButton>Chia sẻ khóa học</PrimaryWhiteButton>
						<BuyToday>
							<div className='icon'>
								<FontAwesomeIcon icon={faUsers} />
							</div>
							<div className='text'>
								<strong>50</strong> người đã mua trong hôm nay
							</div>
						</BuyToday>
						<Ads count={4} />
					</HeaderRightContent>
				</HeaderRight>
			</Header>
		</HeaderBg>
	);
}

const Main = styled.main`
	margin-bottom: 7rem;
`;
const Content = styled(MainLayout)`
	margin-top: 3rem;
	margin-bottom: 4.1rem;

	/* TODO: remove */
	height: 120rem;
`;

const CoursePreviewPage = () => (
	<>
		<Breadcrumb
			path={[
				'Trang chủ',
				'Khóa học',
				'Super Plus: Chinh phục bài tập nâng cao - Môn Sinh học',
			]}
		/>
		<Main>
			<CoursePreviewHeader />
			<ContentContainer>
				<Content>
					<div>
						<FeatureBox features={course.features} />
						{/* <Pagination /> */}
					</div>
					<div></div>
				</Content>
			</ContentContainer>
		</Main>
	</>
);

export default CoursePreviewPage;
